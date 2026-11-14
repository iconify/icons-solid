import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.lsvfzubxo {
  d: path("M10.25 7.5a5 5 0 1 0 10 0a5 5 0 1 0-10 0Z");
}

.r7xv5tbuw {
  d: path("M15.25 12.5v9h3m-3-3.75h2.5M3.75 7.5h6.5M7.75 5l2.5 2.5l-2.5 2.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="lsvfzubxo"/><path class="r7xv5tbuw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:access-request"} {...others} />);
}

export default Component;
