import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.grpnurxvf {
  d: path("M13.1 20.5H3v-13h15v5.8");
}

.num5iko0t {
  d: path("M6 7.5v-2a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v7.75M6 11.5h7m-7 3h4.5m7.5 7l-2.75-2.75a2 2 0 0 1 2.75-2.5a2 2 0 0 1 2.75 2.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="grpnurxvf"/><path class="num5iko0t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:activity-heart-feed"} {...others} />);
}

export default Component;
