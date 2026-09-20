import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.hwr6invyd {
  fill: currentColor;
  d: path("M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m-24 128H72a8 8 0 0 1 0-16h112a8 8 0 0 1 0 16m0-48H72a8 8 0 0 1 0-16h112a8 8 0 0 1 0 16");
}
</style><path class="hwr6invyd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:equals-fill"} {...others} />);
}

export default Component;
