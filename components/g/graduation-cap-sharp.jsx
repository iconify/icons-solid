import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.p4_csjcqu {
  d: path("m12.89 5.21l7.47 3.83l.89.46l-.89.46l-7.47 3.83l-.89.46l-.89-.46l-7.47-3.83l-.89-.46l.89-.46l7.47-3.83l.89-.46z");
}

.suxx-db8r {
  d: path("M6.5 11.75v4.5C6.5 18 9 19.5 12 19.5s5.5-1.5 5.5-3.25v-4.5m2.75-1.5v4.5");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="p4_csjcqu"/><path class="suxx-db8r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:graduation-cap-sharp"} {...others} />);
}

export default Component;
