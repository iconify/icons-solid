import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.jt9wyzbdh {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 15.25h.01");
}

.mx8ylobln {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 2.75H6.5v18.5H2.75zm14.75 0h3.75v18.5H17.5zm-14.75 6H6.5m-3.75 6.5H6.5m11-6.5h3.75m-3.75 6.5h3.75M9 6h6v12H9zm2 3.5h2m-2 3h2");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}
</style><g class="ux2u0rbkq"><path class="mx8ylobln"/><path class="jt9wyzbdh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:dmz-zone-sharp"} {...others} />);
}

export default Component;
