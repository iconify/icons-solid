import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.f7pbthxif {
  d: path("m7.506 14.022l6.797-3.169l1.691 3.625l-6.797 3.169ZM10.25 19h3.5M12 19l-1.25 2.5M12 19l1.25 2.5");
}

.jo9xoz04p {
  d: path("m9.697 6.603l6.797 3.169l-1.691 3.625l-6.797-3.169Z");
}

.mfrd6xr3i {
  d: path("m7.506 5.522l6.797-3.169l1.691 3.625l-6.797 3.169Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="mfrd6xr3i"/><path class="jo9xoz04p"/><path class="f7pbthxif"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:hair-braid"} {...others} />);
}

export default Component;
