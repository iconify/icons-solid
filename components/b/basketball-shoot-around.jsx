import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.d0bgtwhch {
  d: path("M4 12q3.5 3.5 0 7m7-7q-3.5 3.5 0 7m2.5-12H21m0-4.5V12m-6.5-5l1.25 5.5h3L20 7");
}

.p51k3bn3u {
  d: path("M2.5 15.5a5 5 0 1 0 10 0a5 5 0 1 0-10 0Zm0 0h10");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="p51k3bn3u"/><path class="d0bgtwhch"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:basketball-shoot-around"} {...others} />);
}

export default Component;
