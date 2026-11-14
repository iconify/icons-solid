import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.kqlqbrobv {
  d: path("M2.5 20.5V9L12 3.5L21.5 9v11.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vmt-lpbqq {
  d: path("M7 16.5h5v4H7Zm5 0h5v4h-5Zm-2.5-4h5v4h-5Z");
}
</style><g class="ulnmmdpxh"><path class="kqlqbrobv"/><path class="vmt-lpbqq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:wholesale-market"} {...others} />);
}

export default Component;
