import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.di26q_r7p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 13.75h13v7.5h-13zm3 3.75h7M9.8 5.5a6 2.75 30 1 0 10.4 6a6 2.75 30 1 0-10.4-6Zm3.8 5.4l-1 1.7");
}
</style><path class="di26q_r7p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:thumbtack-sharp"} {...others} />);
}

export default Component;
