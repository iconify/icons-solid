import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.mqxrds2if {
  d: path("M4.5 2.5h15v13h-15Zm7.5 13v6m0-8.75V5.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zowafbbhr {
  d: path("M8.75 8.75L12 5.5l3.25 3.25");
}
</style><g class="ulnmmdpxh"><path class="mqxrds2if"/><path class="zowafbbhr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:ahead-only-sign"} {...others} />);
}

export default Component;
