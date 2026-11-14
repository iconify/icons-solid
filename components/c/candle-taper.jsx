import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gf0mus_qm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.5 8.5h3V17h-3ZM9 17h6v2H9Zm3 2v2m-5 0h10M12 5.75C10.85 5 10.75 3.6 12 2c1.25 1.6 1.15 3 0 3.75Z");
}
</style><path class="gf0mus_qm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:candle-taper"} {...others} />);
}

export default Component;
