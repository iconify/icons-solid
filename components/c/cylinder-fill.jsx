import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.mfgc-28ru {
  fill: currentColor;
  d: path("M128 16c-40.37 0-72 19.33-72 44v136c0 24.67 31.63 44 72 44s72-19.33 72-44V60c0-24.67-31.63-44-72-44m0 208c-29.83 0-56-13.08-56-28V77.43C82.92 88.5 103.9 96 128 96s45.08-7.5 56-18.57V196c0 14.92-26.17 28-56 28");
}
</style><path class="mfgc-28ru"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:cylinder-fill"} {...others} />);
}

export default Component;
