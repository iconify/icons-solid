import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.jedknxkfu {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 5v2m-6 6a6 6 0 0 1 12 0Zm6 0v3.25");
}

.kqef4tbqv {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 3.25h.01");
}

.l1sa2pbgo {
  cx: 12px;
  cy: 18.5px;
  r: 2.25px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}
</style><g class="ux2u0rbkq"><path class="kqef4tbqv"/><path class="jedknxkfu"/><circle class="l1sa2pbgo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:jhumka-sharp"} {...others} />);
}

export default Component;
