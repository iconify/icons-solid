import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.m3bq06brf {
  fill: currentColor;
  d: path("M6 6.5h4v4H6Z");
}

.oda4a2bll {
  d: path("M3 3.5h18v17H3Z");
}

.u0cfjfaql {
  d: path("M6 13.5h12m-12 4h7");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="oda4a2bll"/><path class="m3bq06brf"/><path class="u0cfjfaql"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:skeleton-card"} {...others} />);
}

export default Component;
