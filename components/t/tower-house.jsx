import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.b6o45zayg {
  d: path("m12 2.5l5.5 6v13h-11v-13Z");
}

.bvig7hbee {
  d: path("M10.5 10.5h3v3h-3Zm0 11V18a1.5 1.5 0 0 1 3 0v3.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="b6o45zayg"/><path class="bvig7hbee"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:tower-house"} {...others} />);
}

export default Component;
