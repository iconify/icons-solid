import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.be9pzsuua {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 2.75a6.75 6.75 0 0 0-4 12.2v1.55A1.5 1.5 0 0 0 9.5 18h5a1.5 1.5 0 0 0 1.5-1.5v-1.55a6.75 6.75 0 0 0-4-12.2m-2.25 18.5h4.5m-4.75-9v-1.5m2.5 1.5v-4.5m2.5 4.5V9.5");
}
</style><path class="be9pzsuua"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:analytics-insight"} {...others} />);
}

export default Component;
