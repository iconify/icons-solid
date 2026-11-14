import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.d78d4j35i {
  d: path("M9.5 9.5c0-6.75 7.5-6.75 7.5 0m-14.5 0l2 2.5m17-2.5l-2 2.5M12 15.75c-1-1.75-4-1.75-4 0s3 1.75 4 0s4-1.75 4 0s-3 1.75-4 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xykbl54pk {
  d: path("M2.5 9.5h19l-1.5 12H4Zm4.5 0c0-6.75 7.5-6.75 7.5 0");
}
</style><g class="ulnmmdpxh"><path class="xykbl54pk"/><path class="d78d4j35i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:bag-for-life"} {...others} />);
}

export default Component;
