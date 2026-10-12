import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.o-7epbc6g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.25 6.25q1.5 2.625 5.25 3c0 1.5-.75 2.25-.75 3.25S9.5 14 9.5 15s-.75 3.5-1 6.25m8.75-18.5c0 4 .75 6.5 1.5 9.5s1.5 5.5 1.75 9m-8.25-8.75h3.5m-3.5 3h3.5m-3.5 3h3.5");
}
</style><path class="o-7epbc6g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:throat"} {...others} />);
}

export default Component;
