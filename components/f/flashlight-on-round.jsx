import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.sdtg1oati {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m15 9l2 2a1.414 1.414 0 0 1 0 2l-2 2c-.64.64-1.36 1-2 1h-1c-.64 0-1.36.36-2 1l-3 3a1.414 1.414 0 0 1-2 0l-1-1a1.414 1.414 0 0 1 0-2l3-3c.64-.64 1-1.36 1-2v-1c0-.64.36-1.36 1-2l2-2a1.414 1.414 0 0 1 2 0zM9 9l6 6m1-12v2m3 0l2-2m-2 5h2");
}
</style><path class="sdtg1oati"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:flashlight-on-round"} {...others} />);
}

export default Component;
