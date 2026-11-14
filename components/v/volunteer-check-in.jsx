import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bia11_bye {
  d: path("M8.5 2.5h7v4h-7Zm-.5 11l3 3l5.5-6");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.unogj3s4j {
  d: path("M4 4.5h16v17H4Z");
}
</style><g class="ulnmmdpxh"><path class="unogj3s4j"/><path class="bia11_bye"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:volunteer-check-in"} {...others} />);
}

export default Component;
