import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gp70ccj7r {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 2.75C8.5 7 5.25 10.75 5.25 14.5a6.75 6.75 0 0 0 13.5 0c0-3.75-3.25-7.5-6.75-11.75Zm2.5 9l-5 6.5");
}

.iupjiw7mk {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M9.75 12.75h.01m4.49 4.5h.01");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}
</style><g class="ux2u0rbkq"><path class="gp70ccj7r"/><path class="iupjiw7mk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:hygrometer-sharp"} {...others} />);
}

export default Component;
