import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.erli_eb-p {
  d: path("M14.215 19.762L13.5 20L8 18l-5.5 2V5L8 3l5.5 2l6-2v7.671M8 3v15m5.5-13v8.7m0 4.7V20");
}

.j5khupbbi {
  d: path("m18.5 21.25l-2.5-4a2.75 2.75 0 1 1 5 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="erli_eb-p"/><path class="j5khupbbi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:festival-map"} {...others} />);
}

export default Component;
