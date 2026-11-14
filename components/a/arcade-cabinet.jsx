import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.jhqb5jp-s {
  d: path("M8.5 5.5h7v5h-7Zm-1 13V17m5.5 1.5h.01m2.99 0h.01");
}

.lb1dt9blu {
  d: path("M6 2.5h12V13l2 2.5v6H4v-6L6 13Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="lb1dt9blu"/><path class="jhqb5jp-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:arcade-cabinet"} {...others} />);
}

export default Component;
