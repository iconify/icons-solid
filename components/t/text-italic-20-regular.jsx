import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.tkh4i9boa {
  fill: currentColor;
  d: path("M16 3a.5.5 0 0 1 0 1h-3.157L8.227 16H11.5a.5.5 0 0 1 0 1H4a.5.5 0 0 1 0-1h3.156l4.615-12H8.5a.5.5 0 0 1 0-1z");
}
</style><path class="tkh4i9boa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:text-italic-20-regular"} {...others} />);
}

export default Component;
