import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.pycqfrs_c {
  d: path("M8.25 6V2.75h13v13H18m-8.75-5v5m-2.25-2L9.25 16l2.25-2.25m-5.5 3v1.75h6.5v-1.75");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zfs9m9b1j {
  d: path("M2.75 8.25h13v13h-13z");
}
</style><g class="x2cwu0gfd"><path class="zfs9m9b1j"/><path class="pycqfrs_c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:git-clone-sharp"} {...others} />);
}

export default Component;
