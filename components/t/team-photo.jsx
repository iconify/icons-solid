import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.eb2d79_gk {
  d: path("M2.5 4h19v15.5h-19Z");
}

.rm_sdkduk {
  d: path("M6 9a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Zm8 2a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm-9 8.5c0-3 1.5-5 3.5-5c1.75 0 3.25 1.25 4 2.75c.5-.75 1.75-1.5 3.5-1.5s3 1.25 3 3.75");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="eb2d79_gk"/><path class="rm_sdkduk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:team-photo"} {...others} />);
}

export default Component;
