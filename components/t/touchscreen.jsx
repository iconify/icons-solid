import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.nlvjbec6l {
  d: path("M7.5 15.5H5A2.5 2.5 0 0 1 2.5 13V5A2.5 2.5 0 0 1 5 2.5h14A2.5 2.5 0 0 1 21.5 5v7.5");
}

.nv98h9b6s {
  d: path("M10.5 21.5V10a1.5 1.5 0 0 1 3 0v4.5l3.5.75A1.5 1.5 0 0 1 18.25 17l-.5 4.5M8.536 8a4 4 0 0 1 6.928 0");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="nlvjbec6l"/><path class="nv98h9b6s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:touchscreen"} {...others} />);
}

export default Component;
