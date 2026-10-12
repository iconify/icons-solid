import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.udl40_bpm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 4.75h18.5v6.5H2.75zM6.25 8h11.5m-12 3.25v6.5m6.25-6.5v6.5m6.25-6.5v6.5M2.75 20.5h4m3.25 0h4m3.25 0h4");
}
</style><path class="udl40_bpm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:guardrails-sharp"} {...others} />);
}

export default Component;
