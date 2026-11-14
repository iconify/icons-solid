import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ogu19wb6i {
  d: path("M5.5 6h13a2 2 0 0 1 2 2v7.5L15 21H5.5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.w83msebki {
  d: path("M20.5 15.5H17a2 2 0 0 0-2 2V21M10.25 4.25a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0ZM12 6v3.5");
}
</style><g class="ulnmmdpxh"><path class="ogu19wb6i"/><path class="w83msebki"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:annotation-pin"} {...others} />);
}

export default Component;
