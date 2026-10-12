import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.evjypunfh {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.25 18.5c.75-3 2-5.5 3.25-5.5s2.5 2.5 3.25 5.5Zm11 0c.75-3 2-5.5 3.25-5.5s2.5 2.5 3.25 5.5Z");
}

.jr3o87bug {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M6.5 9.5h.01m10.99 0h.01M12 7h.01M9 5h.01M15 4.5h.01");
}

.m9yfbdcjj {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.75 18.5c1-4 2.5-7.25 4.25-7.25s3.25 3.25 4.25 7.25Zm-5 0h18.5v2.75H2.75z");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}
</style><g class="ux2u0rbkq"><path class="evjypunfh"/><path class="m9yfbdcjj"/><path class="jr3o87bug"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:holi-colors-sharp"} {...others} />);
}

export default Component;
