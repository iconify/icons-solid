import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gfcwfyrpv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.25 7.25v14m5-14v14m5.5-14v14m5-14v14m-17-10.75h18.5M2.75 18h18.5M3 7.25L4.25 3.5L5.5 7.25m2.5 0L9.25 3.5l1.25 3.75m3 0l1.25-3.75L16 7.25m2.5 0l1.25-3.75L21 7.25");
}
</style><path class="gfcwfyrpv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:fence-iron-sharp"} {...others} />);
}

export default Component;
