import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.v0xmq5bps {
  d: path("M3 8v10a2.5 2.5 0 0 0 2.5 2.5h11m-7-7.5L13 9.5l2.5 2.5l1.5-1.5l2 2");
}

.vc9qurbkq {
  d: path("M6.5 3.5h15V16h-15Z");
}
</style><g class="ulnmmdpxh"><path class="vc9qurbkq"/><path class="v0xmq5bps"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:gallery"} {...others} />);
}

export default Component;
