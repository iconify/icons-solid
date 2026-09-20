import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.dm5rl9b8h {
  fill: currentColor;
  d: path("M236.78 68.37A6 6 0 0 0 232 66H55.67l-9.89-35.61A6 6 0 0 0 40 26H16a6 6 0 0 0 0 12h19.44L71 165.89A22.08 22.08 0 0 0 92.16 182H191a22.08 22.08 0 0 0 21.2-16.11l25.63-92.28a6 6 0 0 0-1.05-5.24m-36.2 94.31A10 10 0 0 1 191 170H92.16a10 10 0 0 1-9.63-7.32L59 78h165.11ZM102 216a14 14 0 1 1-14-14a14 14 0 0 1 14 14m104 0a14 14 0 1 1-14-14a14 14 0 0 1 14 14");
}
</style><path class="dm5rl9b8h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:shopping-cart-simple-light"} {...others} />);
}

export default Component;
