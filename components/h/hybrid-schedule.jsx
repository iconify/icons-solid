import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gex6ffbtl {
  d: path("m14 17.75l3.75-3.5l3.75 3.5v3.75H14Zm3.75 3.75v-2.25");
}

.pq9rx6b_j {
  d: path("M11.2 21H3.5V4.5h17V13M8 2.5v4m8-4v4m-12.5 3h17");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="pq9rx6b_j"/><path class="gex6ffbtl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:hybrid-schedule"} {...others} />);
}

export default Component;
