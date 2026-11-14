import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.thyf560bk {
  d: path("M15.25 18.25a3 3 0 1 0 6 0a3 3 0 1 0-6 0Zm1 2l4-4");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vu03d48fv {
  d: path("M12.544 20.5H3.5v-10L12 3.25l8.5 7.25v2.056M12 9.5v7M8.5 13h7");
}
</style><g class="ulnmmdpxh"><path class="vu03d48fv"/><path class="thyf560bk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:health-out-of-network"} {...others} />);
}

export default Component;
