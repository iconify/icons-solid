import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.mxzl1tbmo {
  d: path("M5.5 9.5a6.5 6.5 0 1 0 13 0a6.5 6.5 0 1 0-13 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.v6meuoepj {
  d: path("M9 9.5a3 6.5 0 1 0 6 0a3 6.5 0 1 0-6 0Zm-3.5 0h13M12 16v4.5m-4 0h8");
}
</style><g class="ulnmmdpxh"><path class="mxzl1tbmo"/><path class="v6meuoepj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:globe-kids"} {...others} />);
}

export default Component;
