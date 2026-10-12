import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.asdf1bcrw {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.52 9.94a3.75 3.75 0 1 1 2.96 0a5.75 5.75 0 1 1-2.96 0Zm2.23-3.44l4.5 1");
}

.dkw9b6vju {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 14.5h.01M12 18h.01");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}
</style><g class="ux2u0rbkq"><path class="asdf1bcrw"/><path class="dkw9b6vju"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:snowman-sharp"} {...others} />);
}

export default Component;
