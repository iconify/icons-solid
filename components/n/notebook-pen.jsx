import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.i5yxbkbli {
  d: path("m15.121 8.464l1.415 1.415l-4.597 4.596l-1.767.353l.353-1.767Z");
}

.l7n7z43oo {
  d: path("M6 3h14v18H6ZM4 7.5h4M4 12h4m-4 4.5h4");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="l7n7z43oo"/><path class="i5yxbkbli"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:notebook-pen"} {...others} />);
}

export default Component;
