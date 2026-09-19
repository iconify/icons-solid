import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.smjywgqfj {
  fill: currentColor;
  d: path("m5 12l1.41 1.41L12 7.83l5.59 5.58L19 12l-7-7z");
}
</style><path class="smjywgqfj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:outline-keyboard-control-key"} {...others} />);
}

export default Component;
