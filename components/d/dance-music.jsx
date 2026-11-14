import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.sf03wuntr {
  d: path("M4 14a7 7 0 1 0 14 0a7 7 0 1 0-14 0Zm7-11.5V7m-7 7h14");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xe_ahmbxa {
  d: path("M8 14a3 7 0 1 0 6 0a3 7 0 1 0-6 0ZM19.5 3.5v4m-2-2h4");
}
</style><g class="ulnmmdpxh"><path class="sf03wuntr"/><path class="xe_ahmbxa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:dance-music"} {...others} />);
}

export default Component;
