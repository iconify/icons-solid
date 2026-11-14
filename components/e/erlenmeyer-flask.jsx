import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.jolfyzezz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.5 3v5.75l-5 9.75C3.9 19.75 4.6 21 6 21h12c1.4 0 2.1-1.25 1.5-2.5l-5-9.75V3M8 3h8M7 15h10");
}
</style><path class="jolfyzezz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:erlenmeyer-flask"} {...others} />);
}

export default Component;
