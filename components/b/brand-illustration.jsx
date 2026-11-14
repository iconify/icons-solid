import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.jd2xql-0s {
  d: path("m8.25 17.5l5.25-8.25l5.25 8.25Z");
}

.o0uxpabcc {
  d: path("M2.5 3.5h19v17h-19Z");
}

.qncdlqy3p {
  d: path("M6.25 10.25a3 3 0 1 0 6 0a3 3 0 1 0-6 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="o0uxpabcc"/><path class="qncdlqy3p"/><path class="jd2xql-0s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:brand-illustration"} {...others} />);
}

export default Component;
