import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.aqoch2kkx {
  d: path("M4.5 2.5h15v19h-15Zm3.5 4h8M8 10h8m-8 3.5h4");
}

.oas49dbjt {
  d: path("M3 19.5c2-3.25 4-3.25 4.5-1s2 2.25 3.5-.5c1-1.75 2.5-1 2.5.75c0 1.25 2.5 1 7.5-1");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="aqoch2kkx"/><path class="oas49dbjt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:signed-contract"} {...others} />);
}

export default Component;
