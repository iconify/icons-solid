import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bpb10db7x {
  fill: currentColor;
  d: path("m12 8l-6 6l1.41 1.41L12 10.83l4.59 4.58L18 14z");
}
</style><path class="bpb10db7x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:outline-expand-less"} {...others} />);
}

export default Component;
