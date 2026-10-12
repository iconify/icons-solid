import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.rh2140hgr {
  d: path("M13.75 2.75h-9v18.5h14.5v-13Z");
}

.tgnc3yw2s {
  d: path("M13.75 2.75v5.5h5.5M12 10.75l3.5 2v4l-3.5 2l-3.5-2v-4Zm-3.5 2l3.5 2l3.5-2m-3.5 2v4");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="rh2140hgr"/><path class="tgnc3yw2s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:file-3d-sharp"} {...others} />);
}

export default Component;
