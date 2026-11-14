import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bhh4xybpx {
  d: path("m15 18l-.5 3l1.5-1l1.5 1l-.5-3");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wyzzqtjtp {
  d: path("M13.5 15.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Z");
}

.xjcyz8rew {
  d: path("M11.6 18.5H3.5v-14h17v8.2m0 5.6v.2h-.1M7 9h10M7 12.5h4.6");
}
</style><g class="ulnmmdpxh"><path class="xjcyz8rew"/><path class="wyzzqtjtp"/><path class="bhh4xybpx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:inspection-certificate"} {...others} />);
}

export default Component;
