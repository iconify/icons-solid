import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ch46ixtex {
  d: path("m18.25 21.5l-3-3a2 2 0 0 1 3-3a2 2 0 0 1 3 3Z");
}

.jxsforoir {
  d: path("M13.344 20.5H3.5v-10L12 3.25l8.5 7.25v1.656");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="jxsforoir"/><path class="ch46ixtex"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:animal-sanctuary"} {...others} />);
}

export default Component;
