import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.j_vjjz7fj {
  d: path("M8 6.25a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0ZM8 12a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Zm0 5.75a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Zm12.848-1a3 3 0 1 1-5.196 0m2.598-2.25v3.25");
}

.rxyd1h7sa {
  d: path("M13.8 22H5V2h9v12.1");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="rxyd1h7sa"/><path class="j_vjjz7fj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:traffic-light-off"} {...others} />);
}

export default Component;
