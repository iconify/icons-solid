import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.w5873umpg {
  fill: currentColor;
  d: path("m8.9 19.308l-.708-.708L12 14.792l3.808 3.808l-.708.708l-3.1-3.1zm3.1-10.1L8.192 5.4l.708-.708l3.1 3.1l3.1-3.1l.708.708z");
}
</style><path class="w5873umpg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:unfold-less"} {...others} />);
}

export default Component;
