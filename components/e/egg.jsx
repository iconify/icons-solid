import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":64,"height":64};
const content = `<style>.nnfwivb-v {
  fill: currentColor;
  d: path("M53.56 29.807C51.111 11.768 39.666 2 32 2c-7.668 0-19.112 9.768-21.559 27.807C7.988 47.842 15.853 62 32 62c16.146 0 24.013-14.158 21.56-32.193");
}
</style><path class="nnfwivb-v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"emojione-monotone:egg"} {...others} />);
}

export default Component;
