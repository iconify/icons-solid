import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.efa5uzf3a {
  fill: currentColor;
  d: path("M128 20c-38.13 0-68 17.57-68 40v136c0 22.43 29.87 40 68 40s68-17.57 68-40V60c0-22.43-29.87-40-68-40m0 8c32.52 0 60 14.65 60 32s-27.48 32-60 32s-60-14.65-60-32s27.48-32 60-32m60 168c0 17.35-27.48 32-60 32s-60-14.65-60-32V79.11C79.35 91.65 101.71 100 128 100s48.65-8.35 60-20.89Z");
}
</style><path class="efa5uzf3a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:cylinder-thin"} {...others} />);
}

export default Component;
