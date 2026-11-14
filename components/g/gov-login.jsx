import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bbgxh6f2g {
  d: path("M8.5 9.5h7v4h-7Zm1.5 0V8a2 2 0 0 1 4 0v1.5");
}

.pq2inq04c {
  d: path("M2.5 3h19v13.5h-19ZM12 16.5v4m-3.5 0h7");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="pq2inq04c"/><path class="bbgxh6f2g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:gov-login"} {...others} />);
}

export default Component;
