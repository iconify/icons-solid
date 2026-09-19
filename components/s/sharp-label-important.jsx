import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.zb1oopb0n {
  fill: currentColor;
  d: path("M4 18.99h12.04L21 12l-4.97-7H4l5 7z");
}
</style><path class="zb1oopb0n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-label-important"} {...others} />);
}

export default Component;
