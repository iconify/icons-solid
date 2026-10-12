import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.pjp35ib3d {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.91 10.5a3.25 3.25 0 1 0 6.18 0ZM6.5 21.25h11.75v-.75c0-1.6-2.81-2.75-6.25-2.75S5.75 18.9 5.75 20.5v.75zM8.4 10.5a3.6 3.6 0 0 1 7.2 0Zm7.2 0h2.75");
}
</style><path class="pjp35ib3d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:boy-sharp"} {...others} />);
}

export default Component;
