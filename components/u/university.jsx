import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.pq7v-bbaa {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.75 9.5a5.25 5.25 0 0 1 10.5 0M12 4.25v-1.5M2.75 9.5h18.5m-15.5 3V18m4-5.5V18m4.5-5.5V18m4-5.5V18m-15.5 2.75h18.5");
}
</style><path class="pq7v-bbaa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:university"} {...others} />);
}

export default Component;
