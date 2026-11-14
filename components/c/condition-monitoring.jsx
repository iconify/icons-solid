import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.e806y8boy {
  d: path("M3 4.5h14v13H3Zm2.5 13l-1 3h11l-1-3M17 11h4.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.x99fvy-7v {
  d: path("M5.5 11h2L9 8l2 6l1.5-3h2");
}
</style><g class="ulnmmdpxh"><path class="e806y8boy"/><path class="x99fvy-7v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:condition-monitoring"} {...others} />);
}

export default Component;
