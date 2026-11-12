import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.a09g2ehcd {
  d: path("M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8");
}

.ipq1z-bjh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.kj9125bhw {
  d: path("M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 9.20261 3.14864 6.67349 5 4.85857");
  opacity: var(--svg-opacity--0-5, 0.5);
}

.ubsyz0bji {
  d: path("M5 12C5 15.866 8.13401 19 12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5");
  opacity: var(--svg-opacity--0-5, 0.5);
}
</style><g class="ipq1z-bjh"><path class="kj9125bhw"/><path class="ubsyz0bji"/><path class="a09g2ehcd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:round-graph-line-duotone"} {...others} />);
}

export default Component;
