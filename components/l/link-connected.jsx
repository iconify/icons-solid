import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xsv8hdbpm {
  d: path("M10.052 17.638a6 6 0 1 1 3.341-3.008");
}

.ze0cfd9xh {
  d: path("M13.948 6.362a6 6 0 1 1-3.341 3.008");
}
</style><g class="ulnmmdpxh"><path class="xsv8hdbpm"/><path class="ze0cfd9xh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:link-connected"} {...others} />);
}

export default Component;
