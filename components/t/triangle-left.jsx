import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.fuofjmbmx {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M7.002 10L14 14.037V5.963zm-2.5-.866a1 1 0 0 0 0 1.732l9.998 5.769a1 1 0 0 0 1.5-.866V4.23a1 1 0 0 0-1.5-.866z");
}
</style><path clip-rule="evenodd" class="fuofjmbmx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pop:triangle-left"} {...others} />);
}

export default Component;
