import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.btn6nbeho {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M8 8.143S3 11.714 3 16a5 5 0 0 0 10 0c0-4.286-5-7.857-5-7.857M18 3s-3 2.143-3 4.714a3 3 0 0 0 6 0C21 5.143 18 3 18 3");
}
</style><path class="btn6nbeho"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:droplets-sharp"} {...others} />);
}

export default Component;
