import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ai917_bhn {
  d: path("M5.75 9.25h3");
}

.dbj-8dbfb {
  d: path("M5.5 5.75v-2h3.75v2h12v13.5H2.75V5.75z");
}

.tubvt93bf {
  cx: 14.5px;
  cy: 12.5px;
  r: 4px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="dbj-8dbfb"/><circle class="tubvt93bf"/><path class="ai917_bhn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:action-cam-sharp"} {...others} />);
}

export default Component;
