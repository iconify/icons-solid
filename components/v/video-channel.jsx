import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.r9mtg_bxy {
  d: path("M2.5 9.5h19v12h-19Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.uq0c98bra {
  d: path("m10 12.25l5.25 3.25L10 18.75Zm-1-5.5a4.25 4.25 0 0 1 6 0M5.5 5a9 9 0 0 1 13 0");
}
</style><g class="ulnmmdpxh"><path class="r9mtg_bxy"/><path class="uq0c98bra"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:video-channel"} {...others} />);
}

export default Component;
