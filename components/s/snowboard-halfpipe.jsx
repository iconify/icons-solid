import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.d9h5sgbzf {
  d: path("m10.341 5.531l8.156-3.804l1.162 2.492l-8.156 3.804Z");
}

.gmjnzgtgx {
  d: path("M4 8v4a8 8 0 0 0 16 0V8");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="gmjnzgtgx"/><path class="d9h5sgbzf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:snowboard-halfpipe"} {...others} />);
}

export default Component;
