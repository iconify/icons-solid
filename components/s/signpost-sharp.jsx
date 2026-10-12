import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.xjr93abvn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.25 4H17.5l.71.71l1.33 1.33l.71.71l-.71.71l-1.33 1.33l-.71.71H5.25V4zm1.25 8h11.25v5.5H6.5l-.71-.71l-1.33-1.33l-.71-.71l.71-.71l1.33-1.33l.71-.71zM12 9.5V12m0 5.5v3.75");
}
</style><path class="xjr93abvn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:signpost-sharp"} {...others} />);
}

export default Component;
