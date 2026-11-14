import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.jm6jpnbxn {
  d: path("M10 21.5V17h4v4.5M7 11V8M5.5 2.5h3V8h-3ZM17 11V8m-1.5-5.5h3V8h-3Z");
}

.jysz7tpmd {
  d: path("M3.5 11h17v10.5h-17Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="jysz7tpmd"/><path class="jm6jpnbxn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:rooftop-site"} {...others} />);
}

export default Component;
