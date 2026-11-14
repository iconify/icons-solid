import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.areq-7y_z {
  d: path("m4.5 7.5l1 3l3.25-1");
}

.t2v8j0b2e {
  d: path("M5.5 4.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm3 3.5l1 5.5L8 21m1.5-7.5l11-4");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="t2v8j0b2e"/><path class="areq-7y_z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:kickboxing"} {...others} />);
}

export default Component;
