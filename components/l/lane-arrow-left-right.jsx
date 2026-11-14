import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.d7tjfwunm {
  d: path("M7.5 5L4 8.5L7.5 12m9-7L20 8.5L16.5 12");
}

.t6ed8ubto {
  d: path("M12 19.5v-7a4 4 0 0 0-4-4H4m8 4a4 4 0 0 1 4-4h4");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="t6ed8ubto"/><path class="d7tjfwunm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:lane-arrow-left-right"} {...others} />);
}

export default Component;
