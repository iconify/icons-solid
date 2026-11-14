import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.uigyprjdz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m5.5 9.75l.737.811a1.75 1.75 0 0 0 2.879-.432l1.301-2.764a1.75 1.75 0 0 1 3.166 0l1.301 2.764a1.75 1.75 0 0 0 2.879.432l.737-.811a1.272 1.272 0 0 1 2.209.955l-.582 7.432a1.75 1.75 0 0 1-1.745 1.613H5.618a1.75 1.75 0 0 1-1.745-1.613l-.582-7.432A1.272 1.272 0 0 1 5.5 9.75m-1.75 6.5h16.5M12 13h.01");
}
</style><path class="uigyprjdz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:crown-toy"} {...others} />);
}

export default Component;
