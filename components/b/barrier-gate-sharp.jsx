import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dbiovpbzy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 6.5h4.5v14.75h-4.5zm4.5 2h14v3.75h-14zm4.25 0l-1.75 3.75M15.5 8.5l-1.75 3.75M19.5 8.5l-1.75 3.75");
}
</style><path class="dbiovpbzy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:barrier-gate-sharp"} {...others} />);
}

export default Component;
