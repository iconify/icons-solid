import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fmshjwb_n {
  d: path("m3.62 4.25l3.51 2l.87.5v1.5l-.87.5l-3.51 2l-.87.5v-7.5z");
}

.rkfq4ab9p {
  d: path("M8 7.5h13.25V15H8.5a2.75 2.75 0 0 0 0 5.5h12.75");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="fmshjwb_n"/><path class="rkfq4ab9p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:trombone-sharp"} {...others} />);
}

export default Component;
