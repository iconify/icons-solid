import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.d776dzbvz {
  d: path("M2.5 4.5h14v10h-14Zm7 10.5v2.5m-3 0h6");
}

.lu4qe3nbs {
  d: path("M15.5 9.5h6v11h-6Zm3 8.25h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="d776dzbvz"/><path class="lu4qe3nbs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:devices-multiple"} {...others} />);
}

export default Component;
