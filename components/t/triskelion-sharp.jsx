import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.qj2hjpysp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 12.5a4.13 4.13 0 0 1 0-8.25a2.25 2.25 0 0 1 0 4.5m0 3.75a4.13 4.13 0 0 1 7.14 4.13a2.25 2.25 0 0 1-3.89-2.25M12 12.5a4.13 4.13 0 0 1-7.14 4.13a2.25 2.25 0 0 1 3.89-2.25");
}
</style><path class="qj2hjpysp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:triskelion-sharp"} {...others} />);
}

export default Component;
