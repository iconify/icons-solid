import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.h8jpe_b8x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 6.75v-2h6l2 2.25h10.5v14H2.75v-2Zm8 4.5l3.5 3.5M12.5 9.5L16 13m-2.75-1l-5 5");
}
</style><path class="h8jpe_b8x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:lawsuit-file-sharp"} {...others} />);
}

export default Component;
