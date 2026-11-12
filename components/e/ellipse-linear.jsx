import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.xvx87dudj {
  fill: none;
  stroke: currentColor;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M22 12C22 15.866 17.5228 19 12 19C6.47715 19 2 15.866 2 12C2 8.13401 6.47715 5 12 5C17.5228 5 22 8.13401 22 12Z");
}
</style><path class="xvx87dudj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:ellipse-linear"} {...others} />);
}

export default Component;
