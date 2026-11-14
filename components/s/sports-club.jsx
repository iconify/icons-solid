import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dogyydbmf {
  d: path("M3.5 14.5L12 8l8.5 6.5v7h-17ZM12 8V2.5m0 0L17 4l-5 1.5Z");
}

.lxhoymbab {
  d: path("M10 21.5v-4h4v4");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="dogyydbmf"/><path class="lxhoymbab"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:sports-club"} {...others} />);
}

export default Component;
