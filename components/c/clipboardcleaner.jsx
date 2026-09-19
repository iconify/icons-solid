import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.oszbkjbue {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M43.5 4.5L30.91 17.09m0 0c3.03 3.03 4.213 6.91 2.356 11.198c-1.747 4.034-6.52 15.212-6.52 15.212s-7.708-.515-14.72-7.526S4.5 21.254 4.5 21.254s11.178-4.773 15.212-6.52c4.288-1.857 8.169-.674 11.199 2.356m-12.752-1.685L32.504 29.75");
}
</style><path class="oszbkjbue"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:clipboardcleaner"} {...others} />);
}

export default Component;
