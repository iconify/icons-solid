import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.pf-0bccsx {
  d: path("M10.5 6A7.5 2.5 0 0 0 3 8.5v10a7.5 2.5 0 0 0 7.5 2.5Zm3-3A7.5 2.5 0 0 1 21 5.5v10a7.5 2.5 0 0 1-7.5 2.5Z");
}

.reabgpbsb {
  d: path("M3 8.5a7.5 2.5 0 0 0 7.5 2.5m3-3A7.5 2.5 0 0 0 21 5.5m-18 8a7.5 2.5 0 0 0 7.5 2.5m3-3a7.5 2.5 0 0 0 7.5-2.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="pf-0bccsx"/><path class="reabgpbsb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:database-shard"} {...others} />);
}

export default Component;
