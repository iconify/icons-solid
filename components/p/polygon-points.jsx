import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.xsu73d-da {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m12.218 5.166l.988.156M10.07 17.638l-1.717-.813m-2.492-5.909l.791-2.372M6.5 4.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0M16 6a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0m2.25 7.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0m-5.75 6a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0M3 15a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0");
}
</style><path class="xsu73d-da"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:polygon-points"} {...others} />);
}

export default Component;
