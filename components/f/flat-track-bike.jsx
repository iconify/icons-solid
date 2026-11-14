import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ft82cli5t {
  d: path("M2.5 16.5a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0Zm12 0a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0Z");
}

.o783q5dsu {
  d: path("M4 10h4.5l2-2H16l-3 5H9.5L6 16.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wzpcx1iac {
  d: path("M13.5 5.5h2l2.5 11");
}
</style><g class="ulnmmdpxh"><path class="ft82cli5t"/><path class="o783q5dsu"/><path class="wzpcx1iac"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:flat-track-bike"} {...others} />);
}

export default Component;
