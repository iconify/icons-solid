import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.jnjshbc3x {
  fill: currentColor;
  d: path("M243.15 116.29L139.71 12.85a16.56 16.56 0 0 0-23.42 0L12.85 116.29a16.56 16.56 0 0 0 0 23.42l103.44 103.44a16.56 16.56 0 0 0 23.42 0l103.44-103.44a16.56 16.56 0 0 0 0-23.42m-11.31 12.1L128.4 231.84a.58.58 0 0 1-.8 0L24.16 128.39a.56.56 0 0 1 0-.78L127.6 24.16a.58.58 0 0 1 .8 0l103.44 103.45a.56.56 0 0 1 0 .78m-58.18-14a8 8 0 0 1 0 11.32l-24 24a8 8 0 0 1-11.32-11.32L148.69 128H112a16 16 0 0 0-16 16v8a8 8 0 0 1-16 0v-8a32 32 0 0 1 32-32h36.69l-10.35-10.34a8 8 0 0 1 11.32-11.32Z");
}
</style><path class="jnjshbc3x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:traffic-sign"} {...others} />);
}

export default Component;
