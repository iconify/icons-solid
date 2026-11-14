import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hf65yntzl {
  d: path("M4.5 21.5v-19H17v9");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.y3o2ivj7e {
  d: path("M18 16.25V18l1.25 1");
}

.zebbbtkng {
  d: path("M11.5 18.097v1.153l-7 2.25v-19l7 2.25v13.147M9 12.5h.01m5.24 5.5a3.75 3.75 0 1 0 7.5 0a3.75 3.75 0 1 0-7.5 0Z");
}
</style><g class="ulnmmdpxh"><path class="hf65yntzl"/><path class="zebbbtkng"/><path class="y3o2ivj7e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:visiting-hours"} {...others} />);
}

export default Component;
