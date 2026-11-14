import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.k3vcnrb_m {
  d: path("M10 7L7.5 9.5L10 12m4-5l2.5 2.5L14 12");
}

.n8-i4o31r {
  d: path("M4.5 4h15v11h-15Zm0 11l-2 4h19l-2-4");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="n8-i4o31r"/><path class="k3vcnrb_m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:game-dev"} {...others} />);
}

export default Component;
