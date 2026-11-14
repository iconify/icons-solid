import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ue4xr0uex {
  d: path("M7.5 11.5h.01m8.99 0h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.v5yjpiyql {
  fill: currentColor;
  d: path("M9.5 6.5h5a1.5 1.5 0 0 1 0 3h-1v5a1.5 1.5 0 0 1-3 0v-5h-1a1.5 1.5 0 0 1 0-3Z");
}

.zdgu3ybil {
  d: path("M2.5 12a9.5 9.5 0 1 0 19 0a9.5 9.5 0 1 0-19 0Z");
}
</style><g class="ulnmmdpxh"><path class="zdgu3ybil"/><path class="v5yjpiyql"/><path class="ue4xr0uex"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:skin-type-combination"} {...others} />);
}

export default Component;
