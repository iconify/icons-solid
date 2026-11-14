import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hzxar2bus {
  d: path("M7.5 12.75h9v5.5h-9Zm2.75 2.75h.01m3.49 0h.01");
}

.n578xhy5u {
  d: path("M2.5 3h19v18h-19Zm0 5h19m-16-2.5h.01M8 5.5h.01M12 10.75v2");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="n578xhy5u"/><path class="hzxar2bus"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:browser-test"} {...others} />);
}

export default Component;
