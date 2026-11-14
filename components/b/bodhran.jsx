import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.qg5r4fbtq {
  d: path("M2.5 10.5a9.5 6.5 0 1 0 19 0a9.5 6.5 0 1 0-19 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.uq18gqbff {
  d: path("M2.5 10.5v3a9.5 6.5 0 0 0 19 0v-3m-16 0h13M12 7v7");
}
</style><g class="ulnmmdpxh"><path class="qg5r4fbtq"/><path class="uq18gqbff"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:bodhran"} {...others} />);
}

export default Component;
