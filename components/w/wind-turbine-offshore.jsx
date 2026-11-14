import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.d2ag0_bnm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 8.5v-6m0 6l5.5 3.25M12 8.5l-5.5 3.25M12 8.5v12m-9.5 0q2.375-2 4.75 0t4.75 0t4.75 0t4.75 0");
}
</style><path class="d2ag0_bnm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:wind-turbine-offshore"} {...others} />);
}

export default Component;
