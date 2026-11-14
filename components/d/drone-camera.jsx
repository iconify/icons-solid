import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.in3h2n_cu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.5 6.5h7V11h-7Zm-4 2.25h4m7 0h4m-15 0V5.5m15 3.25V5.5M2 5.5h5m10 0h5M12 11v2.5m-3 3a3 3 0 1 0 6 0a3 3 0 1 0-6 0Z");
}
</style><path class="in3h2n_cu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:drone-camera"} {...others} />);
}

export default Component;
