import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.vqrvoxbtn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 2.75C7 7.25 17 7.5 17 12S7 16.75 7 21.25m10-18.5C17 7.25 7 7.5 7 12s10 4.75 10 9.25M9.75 4.5h4.5m-5 7.5h5.5m-5 7.5h4.5");
}
</style><path class="vqrvoxbtn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:dna-sharp"} {...others} />);
}

export default Component;
