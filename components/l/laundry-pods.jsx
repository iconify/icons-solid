import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.a9rboj3-u {
  d: path("M2.75 8.25a2.25 2.25 0 0 1 4.5 0a2.25 2.25 0 0 0 4.5 0m.5 7.5a2.25 2.25 0 0 1 4.5 0a2.25 2.25 0 0 0 4.5 0");
}

.mmcov6b6v {
  d: path("M2.75 8.25a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0-9 0Zm9.5 7.5a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0-9 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="mmcov6b6v"/><path class="a9rboj3-u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:laundry-pods"} {...others} />);
}

export default Component;
