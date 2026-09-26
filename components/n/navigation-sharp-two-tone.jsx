import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.ipj5p2b6r {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M4.1056 18.5528L11.1056 4.5528C11.4741 3.8157 12.5259 3.8157 12.8944 4.5528L19.8944 18.5528C20.2871 19.3381 19.5495 20.212 18.7094 19.9568L12 17.919L5.2906 19.9568C4.4505 20.212 3.7129 19.3381 4.1056 18.5528Z");
  stroke: none;
}

.vf8rlvbfx {
  d: path("M5 19L12 5L19 19L12 16.8739L5 19Z");
}
</style><g class="gp_8x1bzb"><path class="ipj5p2b6r"/><path class="vf8rlvbfx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:navigation-sharp-two-tone"} {...others} />);
}

export default Component;
