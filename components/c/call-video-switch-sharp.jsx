import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.f0g8knpfb {
  d: path("m15.25 10.25l4.4-2.45l1.6-1.2v10.8l-1.6-1.2l-4.4-2.45Z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zfp8_lbwb {
  d: path("M2.75 6.25h12.5v11.5H2.75z");
}
</style><g class="x2cwu0gfd"><path class="zfp8_lbwb"/><path class="f0g8knpfb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:call-video-switch-sharp"} {...others} />);
}

export default Component;
