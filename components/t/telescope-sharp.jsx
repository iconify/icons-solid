import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.kwtbh9bnh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3.12 12.14l13.52-7.68l2.32 4.98l-14.58 5.42Zm10.46-5.95l2.09 4.48m-4.23 1.57L7.5 21.25m3.94-9.01l4.31 9.01");
}
</style><path class="kwtbh9bnh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:telescope-sharp"} {...others} />);
}

export default Component;
