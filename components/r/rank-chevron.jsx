import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.c0d6mccdx {
  d: path("m5 20.5l7-7l7 7");
}

.ddos-4grn {
  d: path("m5 15.5l7-7l7 7");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.w59o4cb6g {
  d: path("m5 10.5l7-7l7 7");
}
</style><g class="ulnmmdpxh"><path class="w59o4cb6g"/><path class="ddos-4grn"/><path class="c0d6mccdx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:rank-chevron"} {...others} />);
}

export default Component;
