import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.yz36sfr7b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3.64 14.52l1.32-4.54l.14-.48l.14.48l1.32 4.54l.14.48l.14-.48l1.32-4.54l.14-.48l.14.48l1.32 4.54l.14.48l.14-.48l1.32-4.54l.14-.48l.14.48l1.32 4.54l.14.48l.14-.48l1.32-4.54l.14-.48l.14.48l1.32 4.54l.14.48l.14-.48l1.32-4.54l.14-.48l.14.48l1.32 4.54l.14.48h-16zm-.89.48h18.5v4.5H2.75z");
}
</style><path class="yz36sfr7b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:spike-strip-sharp"} {...others} />);
}

export default Component;
