import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gq_wby43g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.75 4.75h7m-7 4.75h7m-7 4.75h7m-7 4.75h7m2.5-14.25h7m-7 4.75h7m-7 4.75h7m-7 4.75h4.5");
}
</style><path class="gq_wby43g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:text-columns-sharp"} {...others} />);
}

export default Component;
