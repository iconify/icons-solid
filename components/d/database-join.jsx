import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.amfmfs6ya {
  d: path("M2.5 2.5H14V14H2.5Z");
}

.e_gp7hbps {
  fill: currentColor;
  d: path("M10 10h4v4h-4Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yaq__qb3d {
  d: path("M10 10h11.5v11.5H10ZM2.5 6.25H14M14 14h7.5");
}
</style><g class="ulnmmdpxh"><path class="amfmfs6ya"/><path class="yaq__qb3d"/><path class="e_gp7hbps"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:database-join"} {...others} />);
}

export default Component;
