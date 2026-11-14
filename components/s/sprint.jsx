import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.googvmb1e {
  d: path("M15 4.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm.5 3.5L11 13l3 3l-2 5m-1-8l-3.5 3l-3.5-.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.unf0dck7i {
  d: path("m8 10l3.5-2.5h4l3 4l2.5-1M2.5 8h4m-4 3.5h3");
}
</style><g class="ulnmmdpxh"><path class="googvmb1e"/><path class="unf0dck7i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:sprint"} {...others} />);
}

export default Component;
