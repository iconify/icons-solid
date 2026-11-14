import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yi_98tbvf {
  d: path("M7.25 9a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0Z");
}

.z5ukvyauo {
  d: path("M5 12.75c-2-3-.5-8 4.5-8.5c3.5-.5 5 2 8 2.5s3.5 3.5 2 5c-2 2-7.5 2.5-10.5 2.5c-2 0-3.25-.5-4-1.5Zm-2.5 4.5h19C20.75 19.5 17 20.5 12 20.5s-8.75-1-9.5-3.25Z");
}
</style><g class="ulnmmdpxh"><path class="z5ukvyauo"/><path class="yi_98tbvf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:steakhouse"} {...others} />);
}

export default Component;
