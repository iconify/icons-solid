import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.j8q-tib6t {
  d: path("m10 6.5l5.5 3l-5.5 3Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.umn_pbcqh {
  d: path("M2.5 2.5h19v14h-19Zm4.5 14v5m10-5v5");
}
</style><g class="ulnmmdpxh"><path class="umn_pbcqh"/><path class="j8q-tib6t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:jumbotron"} {...others} />);
}

export default Component;
