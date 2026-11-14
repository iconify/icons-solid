import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.jzowre_ua {
  d: path("M6 3v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V3M6 9h12");
}

.ui9o21fsi {
  d: path("M9 15.75h6v2.5H9Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="jzowre_ua"/><path class="ui9o21fsi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:magnetic-stirrer"} {...others} />);
}

export default Component;
