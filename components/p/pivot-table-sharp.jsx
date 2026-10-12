import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hpagm3bmk {
  d: path("M2.75 2.75h18.5v18.5H2.75zm6.5 0v18.5m-6.5-12h18.5");
}

.k3mchyb_t {
  d: path("M12.75 13h4.75v4.75M14 11.5L12.5 13l1.5 1.5m2 1.75l1.5 1.5l1.5-1.5");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="hpagm3bmk"/><path class="k3mchyb_t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:pivot-table-sharp"} {...others} />);
}

export default Component;
