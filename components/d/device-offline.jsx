import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.l_dx2pbvn {
  d: path("M14.6 21H5V2.5h11.5v9.1m-7.75 5.9h2.2");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.w98h3vo-z {
  d: path("M14.75 17.25a4.5 4.5 0 0 1 6.5 0M18 20.75h.01m-2.76-6.25l5.5 7");
}
</style><g class="ulnmmdpxh"><path class="l_dx2pbvn"/><path class="w98h3vo-z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:device-offline"} {...others} />);
}

export default Component;
