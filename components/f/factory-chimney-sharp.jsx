import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.p3otqeo_x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 20.5v-7h12l.06-.75l.38-4.5l.06-.75H18l.06.75l.38 4.5l.06.75h2.75v7.75H2.75zM6 17.25h2m3 0h2m3 0h2m-3.5-12a1.75 1.75 0 0 1 3-1.25a1.75 1.75 0 0 1 3.25.75");
}
</style><path class="p3otqeo_x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:factory-chimney-sharp"} {...others} />);
}

export default Component;
