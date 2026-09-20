import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.wuhr3wiqe {
  fill: currentColor;
  d: path("M167.39 196.94a8 8 0 0 1-1.73 8.72l-32 32a8 8 0 0 1-11.32 0l-32-32A8 8 0 0 1 96 192h24V64H96a8 8 0 0 1-5.66-13.66l32-32a8 8 0 0 1 11.32 0l32 32A8 8 0 0 1 160 64h-24v128h24a8 8 0 0 1 7.39 4.94");
}
</style><path class="wuhr3wiqe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:arrows-vertical-fill"} {...others} />);
}

export default Component;
