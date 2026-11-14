import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cio069bbs {
  d: path("M2.5 4.5h19v4h-19Zm1.5 4v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-10");
}

.dfbipfbci {
  d: path("M9 13.75h6v4H9Zm1.5 0v-1a1.5 1.5 0 0 1 3 0v1");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="cio069bbs"/><path class="dfbipfbci"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:chemical-storage"} {...others} />);
}

export default Component;
