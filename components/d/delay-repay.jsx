import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.is8nqnbzt {
  d: path("M16.75 14.5L18 15.75L16.75 17");
}

.jmdhl9jeu {
  d: path("M13 16H2.5V4h18v8.9");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xzv5gsbig {
  d: path("M8.5 10a3 3 0 1 0 6 0a3 3 0 1 0-6 0Zm12.25 8.5A2.75 2.75 0 1 1 18 15.75");
}
</style><g class="ulnmmdpxh"><path class="jmdhl9jeu"/><path class="xzv5gsbig"/><path class="is8nqnbzt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:delay-repay"} {...others} />);
}

export default Component;
