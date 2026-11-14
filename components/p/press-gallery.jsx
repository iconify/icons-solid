import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.h1ui4cb_o {
  d: path("M9.5 8.5h7V12M8 21.5h8M12 16v5.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xzs7lnbgq {
  d: path("M4.5 5a2.5 2.5 0 0 1 5 0v7h8a2 2 0 0 1 0 4h-11a2 2 0 0 1-2-2Z");
}
</style><g class="ulnmmdpxh"><path class="xzs7lnbgq"/><path class="h1ui4cb_o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:press-gallery"} {...others} />);
}

export default Component;
