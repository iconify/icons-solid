import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.qi4blha8e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.25 6zA1.75 1.75 0 0 1 9 7.75v8.5A1.75 1.75 0 0 1 7.25 18a1.75 1.75 0 0 1-1.75-1.75v-8.5A1.75 1.75 0 0 1 7.25 6M2.5 9h3m-3 3h3m-3 3h3M9 9h2c4 0 5-4.5 10-4.5M9 12h12M9 15h2c4 0 5 4.5 10 4.5");
}
</style><path class="qi4blha8e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:fiber-bundle"} {...others} />);
}

export default Component;
