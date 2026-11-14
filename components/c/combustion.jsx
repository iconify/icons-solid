import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.kexu5q5el {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 3c2 3.5 5.5 5.5 5.5 9.5a5.5 5.5 0 0 1-11 0c0-3 1.5-5 3-6c0 2.5.75 3.5 1.75 4c-.5-3-.25-5 .75-7.5ZM7 21h10");
}
</style><path class="kexu5q5el"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:combustion"} {...others} />);
}

export default Component;
