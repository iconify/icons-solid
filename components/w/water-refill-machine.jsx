import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ldeojobve {
  d: path("M2.5 2.5h11v19h-11Zm11 5.5h5.25v2.5m-2.5 11v-6l1.25-2h2.75l1.25 2v6Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wwj5jbczl {
  d: path("m8 7l1.75 3.25a2 2 0 1 1-3.5 0Z");
}
</style><g class="ulnmmdpxh"><path class="ldeojobve"/><path class="wwj5jbczl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:water-refill-machine"} {...others} />);
}

export default Component;
