import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ktufmabdh {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M7.75 11.75h.01m5.49 0h.01");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}

.v5x_aacpn {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.25 15.5a4 4 0 0 0 6.5 0m5.5-12.75v4m-2-2h4");
}

.y3nhvudao {
  cx: 10.5px;
  cy: 13.5px;
  r: 7.75px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ux2u0rbkq"><circle class="y3nhvudao"/><path class="ktufmabdh"/><path class="v5x_aacpn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:emoji-react-sharp"} {...others} />);
}

export default Component;
