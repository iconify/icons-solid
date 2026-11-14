import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.jp4w7abbo {
  d: path("M2.5 20.5V9h3V6.5l2.5 1v-2h3.5l1.5-1V7h3l1.5 1.5v-2h4v14Z");
}

.r9908rbsu {
  d: path("M4.5 20.5v-4.75a1.75 1.75 0 0 1 3.5 0v4.75m2.25 0v-4.75a1.75 1.75 0 0 1 3.5 0v4.75m2.25 0v-4.75a1.75 1.75 0 0 1 3.5 0v4.75");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="jp4w7abbo"/><path class="r9908rbsu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:amphitheatre-ruin"} {...others} />);
}

export default Component;
