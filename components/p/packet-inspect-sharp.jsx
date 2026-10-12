import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.a8keexbaw {
  d: path("M6.25 2.75v4h4.25v-4");
}

.k-7o9iach {
  d: path("m19.3 19.3l1.95 1.95");
}

.rzdlp7b7j {
  cx: 17px;
  cy: 17px;
  r: 3.25px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.z73u8tbcu {
  d: path("M2.75 2.75H14V14H2.75z");
}
</style><g class="x2cwu0gfd"><path class="z73u8tbcu"/><path class="a8keexbaw"/><circle class="rzdlp7b7j"/><path class="k-7o9iach"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:packet-inspect-sharp"} {...others} />);
}

export default Component;
