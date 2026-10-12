import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.er19h6phy {
  d: path("m15.5 11.5l2.5 3.13l-2.5 3.12l-2.5-3.12Z");
}

.tw4hvfb1f {
  d: path("M7 16H3V2.75h11V5");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.y7w14xlgg {
  d: path("M10 8h11v13.25H10z");
}
</style><g class="x2cwu0gfd"><path class="tw4hvfb1f"/><path class="y7w14xlgg"/><path class="er19h6phy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:ganjifa-cards-sharp"} {...others} />);
}

export default Component;
