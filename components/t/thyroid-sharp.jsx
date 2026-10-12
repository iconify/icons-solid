import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hb69bcbpg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 12.25V7H6.75q-2.25 0-3 3l-.5 4.75C3 17 4.5 18.5 6.25 18.5H9v-2.75h6v2.75h2.75c1.75 0 3.25-1.5 3-3.75l-.5-4.75q-.75-3-3-3H15v5.25Zm3-9.5v9.5m0 3.5v5.5");
}
</style><path class="hb69bcbpg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:thyroid-sharp"} {...others} />);
}

export default Component;
