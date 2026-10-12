import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cvxyq_v6a {
  d: path("M10.75 2.75h2.5V6h-2.5zm-6 7.25C4.75 7.75 8 6.25 12 6.25s7.25 1.5 7.25 3.75c0 3.5-3.5 7-7.25 9.5c-3.75-2.5-7.25-6-7.25-9.5Z");
}

.sonk8ooui {
  d: path("M6.25 11.5c3.75 1.25 7.75 1.25 11.5 0m-9.25 3l3.5 1.094l3.5-1.094m-3.5 5v1.75");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="cvxyq_v6a"/><path class="sonk8ooui"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:spinning-top-lattu-sharp"} {...others} />);
}

export default Component;
