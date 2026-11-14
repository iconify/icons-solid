import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.enll7tbnf {
  d: path("M13.5 2.5h5v19h-5Zm0 3.5H16m-2.5 3.5H16");
}

.hpmardb4h {
  d: path("M2.5 14.5c1.58-1.25 3.17-1.25 4.75 0s3.17 1.25 4.75 0s3.17-1.25 4.75 0s3.17 1.25 4.75 0m-19 4c1.58-1.25 3.17-1.25 4.75 0s3.17 1.25 4.75 0s3.17-1.25 4.75 0s3.17 1.25 4.75 0");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="enll7tbnf"/><path class="hpmardb4h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:flood-water-level"} {...others} />);
}

export default Component;
