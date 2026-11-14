import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.m40iitbdq {
  d: path("M4.5 13.5V19a7.5 2.5 0 0 0 15 0v-5.5m-14-11L15 8m3.5-5.5L9 8");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xb27-zy2n {
  d: path("M4.5 13.5a7.5 2.5 0 1 0 15 0a7.5 2.5 0 1 0-15 0Z");
}
</style><g class="ulnmmdpxh"><path class="xb27-zy2n"/><path class="m40iitbdq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:drum-fans"} {...others} />);
}

export default Component;
