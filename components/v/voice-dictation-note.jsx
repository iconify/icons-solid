import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.axq3r0bta {
  d: path("M12.8 19H3V2.5h13v8.4M6 7h7m-7 3.5h7M6 14h4.5m6.25-.25h2.5v4.75h-2.5Z");
}

.n0tltsz-e {
  d: path("M15.25 17c0 1.75 1.25 2.75 2.75 2.75s2.75-1 2.75-2.75M18 19.75v2");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="axq3r0bta"/><path class="n0tltsz-e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:voice-dictation-note"} {...others} />);
}

export default Component;
