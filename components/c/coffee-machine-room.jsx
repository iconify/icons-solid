import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.sqac3lbyh {
  d: path("M4 3h16v5H8v10h12v3H4Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wfp6attlx {
  d: path("M12.5 11h5v1.5L19 16v2h-8v-2l1.5-3.5Z");
}
</style><g class="ulnmmdpxh"><path class="sqac3lbyh"/><path class="wfp6attlx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:coffee-machine-room"} {...others} />);
}

export default Component;
