import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.qcu2-ibcg {
  fill: currentColor;
  d: path("M2 8a5 5 0 0 1 5-5h10a5 5 0 0 1 5 5v8a5 5 0 0 1-1.464 3.536A5 5 0 0 1 17 21H7a5 5 0 0 1-5-5Zm13.685 1.557A4 4 0 0 0 16 8a1 1 0 0 0-2 0a2 2 0 1 1-4 0a1 1 0 0 0-2 0a4 4 0 0 0 3.999 4c1.607 0 3.06-.963 3.686-2.443");
}
</style><path class="qcu2-ibcg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:shopping-bag-alt-fill-round"} {...others} />);
}

export default Component;
