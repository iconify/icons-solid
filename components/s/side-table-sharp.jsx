import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.lu8bxcckv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.25 5.75h5.5v4.5h-5.5zm1.25 0v-2.5h3v2.5m-9.75 4.5h16.5v3H3.75zm8.25 3v8m-3.75 0h7.5");
}
</style><path class="lu8bxcckv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:side-table-sharp"} {...others} />);
}

export default Component;
