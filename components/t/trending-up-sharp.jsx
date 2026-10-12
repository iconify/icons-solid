import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.kl_ihr82r {
  d: path("M15.25 6.75h6v6");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ybu90co9r {
  d: path("m2.75 17.25l6-6l4 4l8.5-8.5");
}
</style><g class="x2cwu0gfd"><path class="ybu90co9r"/><path class="kl_ihr82r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:trending-up-sharp"} {...others} />);
}

export default Component;
