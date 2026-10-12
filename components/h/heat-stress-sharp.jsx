import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.jrx33obyk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 14.6V3h4v11.6a3.25 3.25 0 1 1-4 0ZM13.75 4l-1.5 2l1.5 2l1.5 2l-1.5 2l-1.5 2l1.5 2l1.5 2l-1.5 2m4.5-16l-1.5 2l1.5 2l1.5 2l-1.5 2l-1.5 2l1.5 2l1.5 2l-1.5 2");
}
</style><path class="jrx33obyk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:heat-stress-sharp"} {...others} />);
}

export default Component;
