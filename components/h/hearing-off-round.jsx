import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.opahzumxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M6 9c0-.88.19-1.717.53-2.47m3-3A6 6 0 0 1 18 9c0 1.03-.177 1.853-.47 2.53m-2.983 3.017C13.212 15.414 12 16.202 12 18a3 3 0 0 1-6 0M2 2l20 20");
}
</style><path class="opahzumxh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:hearing-off-round"} {...others} />);
}

export default Component;
