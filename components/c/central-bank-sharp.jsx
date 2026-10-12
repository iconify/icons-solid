import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.r1ftnwf4k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 8a5 5 0 0 1 10 0Zm-3.75 3h17.5m-15 3v4m4-4v4m4.5-4v4m4-4v4m-15 2.75h17.5");
}
</style><path class="r1ftnwf4k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:central-bank-sharp"} {...others} />);
}

export default Component;
