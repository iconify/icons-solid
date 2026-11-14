import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.a74lqhb3g {
  d: path("M2 13.5L3.5 12L5 13.5m-.361-5.75A8.5 8.5 0 0 1 20.5 12");
}

.ax42ambdz {
  d: path("M19.361 16.25A8.5 8.5 0 0 1 3.5 12");
}

.otenktb7z {
  d: path("m19 10.5l1.5 1.5l1.5-1.5M8 12.25L10.75 15L16 9");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ax42ambdz"/><path class="a74lqhb3g"/><path class="otenktb7z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:renewal-won"} {...others} />);
}

export default Component;
