import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bkol_4bhb {
  d: path("M5.75 2.75h12.5v18.5H5.75z");
}

.x-337-bsb {
  d: path("M9.25 7.25h6.5v5H11.5l-2 1.5v-1.5H8.25v-5zm1.5 10.5h2.5");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="bkol_4bhb"/><path class="x-337-bsb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:sms-sharp"} {...others} />);
}

export default Component;
