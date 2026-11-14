import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.f88c2ccib {
  d: path("M7.5 14.5a7 7 0 1 0 14 0a7 7 0 1 0-14 0Z");
}

.mssdg6ame {
  d: path("M11.5 14.5a3 3 0 1 0 6 0a3 3 0 1 0-6 0ZM5.75 6a2.25 1.5 0 1 0 4.5 0a2.25 1.5 0 1 0-4.5 0Zm.75-1.5C5.25 4.5 5.25 3 4 3q-1.125 0-1.5-.75");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="f88c2ccib"/><path class="mssdg6ame"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:fertility"} {...others} />);
}

export default Component;
