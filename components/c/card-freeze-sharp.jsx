import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fgilbg1et {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.75 18.25h-8V4.75h18.5v6.5m-18.5-2.5h18.5M17.5 14v7m-3.03-5.25l6.06 3.5m-6.06 0l6.06-3.5");
}
</style><path class="fgilbg1et"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:card-freeze-sharp"} {...others} />);
}

export default Component;
