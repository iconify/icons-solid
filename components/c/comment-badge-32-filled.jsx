import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":32,"height":32};
const content = `<style>.vecatacsq {
  fill: currentColor;
  d: path("M23.17 3A5 5 0 0 0 30 9.83v9.67a4.5 4.5 0 0 1-4.5 4.5h-7.632l-6.57 5.602C9.999 30.71 8 29.787 8 28.083V24H6.5A4.5 4.5 0 0 1 2 19.5v-12A4.5 4.5 0 0 1 6.5 3zm4.33-1a3.5 3.5 0 1 1 0 7a3.5 3.5 0 0 1 0-7");
}
</style><path class="vecatacsq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:comment-badge-32-filled"} {...others} />);
}

export default Component;
