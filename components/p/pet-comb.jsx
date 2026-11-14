import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.e6x9kqbtp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 3h19v4h-19ZM5 7v5m3.5-5v5M12 7v5m3.5-5v5M19 7v4.9M16 20a2.5 1.75 0 1 0 5 0a2.5 1.75 0 1 0-5 0Zm-.25-3.75h.01m2.74-1.5h.01m2.74 1.5h.01");
}
</style><path class="e6x9kqbtp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:pet-comb"} {...others} />);
}

export default Component;
