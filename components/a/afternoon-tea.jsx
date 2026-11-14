import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.iuvcd7b5n {
  d: path("M5 9.5h11v3a5 5 0 0 1-5 5h-1a5 5 0 0 1-5-5Z");
}

.jren1ny6c {
  d: path("M16 10.5h1.25a2 2 0 0 1 0 4H15.5M3 20.5h16M8.5 3q-1 1.75 0 3.5m4-3.5q-1 1.75 0 3.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="iuvcd7b5n"/><path class="jren1ny6c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:afternoon-tea"} {...others} />);
}

export default Component;
