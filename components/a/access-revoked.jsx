import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bmz4l-b0e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 5.5h5.5L8.75 9L11 12l-2 3l1.25 2.5H5a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2m9.75 1h5a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H14.5L13.25 16l2-3L13 10ZM6 9h.01M17 15.25h2");
}
</style><path class="bmz4l-b0e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:access-revoked"} {...others} />);
}

export default Component;
