import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fyufzibvc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 11h19v9.5h-19ZM4 11V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v6m2 0V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v6m2 0V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v6");
}
</style><path class="fyufzibvc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:case-pack"} {...others} />);
}

export default Component;
