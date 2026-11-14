import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.eztxrab2o {
  d: path("M3 18.5V4l6 2l6-2l6 2v14.5");
}

.ufhpgbcsi {
  d: path("m3 16l6 2l6-2l6 2M9 6v14.5M15 4v14.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="eztxrab2o"/><path class="ufhpgbcsi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:room-divider-screen"} {...others} />);
}

export default Component;
