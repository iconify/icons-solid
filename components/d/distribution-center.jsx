import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.sjuu4rz1o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 12.5v-6l5-3.5v3.5l5-3.5v3.5l5-3.5v9.5Zm7.5 3.25V21m-2-2l2 2l2-2m-5-3.25l-5 5.5m0-3v3h3m8-5.5l5 5.5m-3 0h3v-3");
}
</style><path class="sjuu4rz1o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:distribution-center"} {...others} />);
}

export default Component;
