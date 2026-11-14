import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dz5p7czru {
  d: path("M13.736 2.152a10 10 0 0 1 5.924 3.42m1.737 3.008a10 10 0 0 1 0 6.84m-1.737 3.008a10 10 0 0 1-5.924 3.42m-3.472 0a10 10 0 0 1-5.924-3.42M2.603 15.42a10 10 0 0 1 0-6.84M4.34 5.572a10 10 0 0 1 5.924-3.42M6.75 17.25V12.5h2.5v-1l2.75-2l2.75 2v1h2.5v4.75Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.z5asjccyc {
  d: path("M10.75 10.5V8h2.5v2.5m-3-2.5L12 6.75L13.75 8M11 17.25V15h2v2.25");
}
</style><g class="ulnmmdpxh"><path class="dz5p7czru"/><path class="z5asjccyc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:school-zone"} {...others} />);
}

export default Component;
