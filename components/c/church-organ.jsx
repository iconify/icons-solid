import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bgnk4nbsc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 15V9H7V6h3.5V3h3v3H17v3h3.5v6M7 15V9m3.5 6V6m3 9V6m3.5 9V9M2.5 15h19v6.5h-19Zm0 3.25h19m-13 0v3.25m7-3.25v3.25");
}
</style><path class="bgnk4nbsc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:church-organ"} {...others} />);
}

export default Component;
