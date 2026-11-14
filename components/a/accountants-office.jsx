import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ev1xts_jp {
  d: path("M11.46 20H3.5V10l8-7l8 7v.74");
}

.sukzc79xj {
  d: path("M14.25 13.5H22V22h-7.75Zm2.5 2.75h2.75m-2.75 3h.01m2.74 0h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ev1xts_jp"/><path class="sukzc79xj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:accountants-office"} {...others} />);
}

export default Component;
