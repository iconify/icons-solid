import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.om_avib3w {
  d: path("M9 5.5h6v4H9ZM9 21l3-5.5l3 5.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zf9tidbco {
  d: path("M3 2.5h18v10H3Zm4 10L9 21h6l2-8.5");
}
</style><g class="ulnmmdpxh"><path class="zf9tidbco"/><path class="om_avib3w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:basketball-backboard"} {...others} />);
}

export default Component;
