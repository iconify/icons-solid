import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hn7tnnbwb {
  d: path("M2.5 5h19v14h-19Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ye_r_1bdy {
  d: path("M12 12c-1.5-3.5-6.5-3.5-6.5 0s5 3.5 6.5 0s6.5-3.5 6.5 0s-5 3.5-6.5 0Z");
}
</style><g class="ulnmmdpxh"><path class="hn7tnnbwb"/><path class="ye_r_1bdy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:data-plan-unlimited"} {...others} />);
}

export default Component;
