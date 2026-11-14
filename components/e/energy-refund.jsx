import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.f3a-c11xy {
  d: path("m12.75 9.25l-2.5 3h3.5l-2.5 3");
}

.fey2-dbyt {
  d: path("m6.75 6.5l-3 .75l-.75-3M6.5 12a5.5 5.5 0 1 0 11 0a5.5 5.5 0 1 0-11 0Z");
}

.hveos1a4i {
  d: path("M3.75 7.25a9.5 9.5 0 1 1 0 9.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="hveos1a4i"/><path class="fey2-dbyt"/><path class="f3a-c11xy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:energy-refund"} {...others} />);
}

export default Component;
