import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.aldjv3jws {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.5 2.75H16l.24 2.49l1.27 13.52l.24 2.49H6.25l.24-2.49L7.76 5.24L8 2.75zM10 5.5h4m-4.75 12v2m5.5-2v2M4.25 9.25h15.5M4.25 15h15.5");
}
</style><path class="aldjv3jws"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:splint-board-sharp"} {...others} />);
}

export default Component;
