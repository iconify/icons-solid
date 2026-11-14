import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.r25n_jokt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 15.5C8 13 5.5 11 5.5 8.5c0-3.5 3-6 6.5-6s6.5 2.5 6.5 6c0 2.5-2.5 4.5-6.5 7ZM9.5 18h5v3.5h-5Zm2.5-2.5V18");
}
</style><path class="r25n_jokt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:weather-balloon"} {...others} />);
}

export default Component;
