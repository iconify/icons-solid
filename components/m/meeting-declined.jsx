import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hwkzlfygx {
  d: path("M7 19.5c0-2.25 1.5-3.5 3.5-3.5s3.5 1.25 3.5 3.5M3 3l18 18");
}

.rm7-_vbey {
  d: path("M8.4 4.5h13.1v13.1m-5.9 1.9H2.5V6.4");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="rm7-_vbey"/><path class="hwkzlfygx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:meeting-declined"} {...others} />);
}

export default Component;
