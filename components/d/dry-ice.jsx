import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.mr_q70s6y {
  d: path("m12 10l5.5 3v5.5l-5.5 3l-5.5-3V13Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yzjjsznxg {
  d: path("m6.5 13l5.5 3l5.5-3M12 16v5.5M7 7.25Q5.5 6 7 4.75t0-2.5m5 5Q10.5 6 12 4.75t0-2.5m5 5Q15.5 6 17 4.75t0-2.5");
}
</style><g class="ulnmmdpxh"><path class="mr_q70s6y"/><path class="yzjjsznxg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:dry-ice"} {...others} />);
}

export default Component;
