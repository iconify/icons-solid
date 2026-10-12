import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.xmylgdhnp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.75 4.75h6.5v10.5h-6.5l-2-1.75l2-1.75l-2-1.75l2-1.75l-2-1.75l2-1.75l-2-1.75Zm6.5 5.25h10");
}
</style><path class="xmylgdhnp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:meat-tenderizer-sharp"} {...others} />);
}

export default Component;
