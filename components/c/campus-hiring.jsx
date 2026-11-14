import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hk57ajm5r {
  d: path("M12 13.75v1.75h1.5");
}

.ncyjf7bjy {
  d: path("M6 21.5v-10L12 7l6 4.5v10ZM12 7V2m0 0l5 1.25l-5 1.25Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xxqj4qvfg {
  d: path("M8.75 15.5a3.25 3.25 0 1 0 6.5 0a3.25 3.25 0 1 0-6.5 0Z");
}
</style><g class="ulnmmdpxh"><path class="ncyjf7bjy"/><path class="xxqj4qvfg"/><path class="hk57ajm5r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:campus-hiring"} {...others} />);
}

export default Component;
