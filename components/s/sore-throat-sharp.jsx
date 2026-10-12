import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.rjj_qpbsq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M14.75 21.25v-6h2.75v-3l1.25-.5l.724-.322l-.424-.678l-1.05-2c-.25-3.5-2.75-6-6.5-6c-4 0-6.75 2.75-6.75 6.5c0 2.25.9 4 2.25 5.25v6.75Zm3-4l2.5-.75m-2.5 4l2.5.75");
}
</style><path class="rjj_qpbsq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:sore-throat-sharp"} {...others} />);
}

export default Component;
