import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hcczkwbhd {
  d: path("M11.7 15.5H2.5v-13h15v8.2m-15-4.2h15m-7.5 0v9m-7.5-5h15m-3 4.5a3.5 1.5 0 1 0 7 0a3.5 1.5 0 1 0-7 0Z");
}

.q6hf1pbkj {
  d: path("M14.5 15v5a3.5 1.5 0 0 0 7 0v-5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="hcczkwbhd"/><path class="q6hf1pbkj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:spreadsheet-db"} {...others} />);
}

export default Component;
