import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.rwgb3ptfa {
  d: path("M5.25 14.25a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0ZM17.75 10a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0ZM18 4a1.25 1.25 0 1 0 2.5 0A1.25 1.25 0 1 0 18 4Z");
}

.tqsv_recr {
  d: path("M2.5 2.5H15v19H2.5Zm0 4.5H15");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="tqsv_recr"/><path class="rwgb3ptfa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:laundromat"} {...others} />);
}

export default Component;
