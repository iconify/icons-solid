import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.kvm_u3h-v {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M10 5.5a4.5 4.5 0 1 0 0 9a4.5 4.5 0 0 0 0-9M3.5 10a6.5 6.5 0 1 1 13 0a6.5 6.5 0 0 1-13 0");
}
</style><path clip-rule="evenodd" class="kvm_u3h-v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pop:circle"} {...others} />);
}

export default Component;
