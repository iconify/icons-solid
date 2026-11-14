import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.aqhhxbb6z {
  d: path("m18 9l3 3l-3 3");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xq52442qy {
  d: path("M2.5 7h9v10h-9Zm9 5c2.25 2.5 4-2.5 6.25 0H21");
}
</style><g class="ulnmmdpxh"><path class="xq52442qy"/><path class="aqhhxbb6z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:force-pull"} {...others} />);
}

export default Component;
