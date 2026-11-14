import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hjd0mpbzd {
  d: path("M12 2.5C14.5 4.25 17 5 20 5v6c0 5-3.25 8.75-8 10.5C7.25 19.75 4 16 4 11V5c3 0 5.5-.75 8-2.5Z");
}

.tqvs526mn {
  d: path("M8.25 12L11 14.75L15.75 10");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="hjd0mpbzd"/><path class="tqvs526mn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:verified-shield"} {...others} />);
}

export default Component;
