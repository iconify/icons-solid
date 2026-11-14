import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ngjwxj32z {
  d: path("M9.5 4L9 9.5l3 11");
}

.oq2qjowwo {
  d: path("M7 4h10l4 5.5l-9 11l-9-11ZM3 9.5h18");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yeqoigbkh {
  fill: currentColor;
  d: path("M15 9.5h6l-9 11Z");
}
</style><g class="ulnmmdpxh"><path class="oq2qjowwo"/><path class="ngjwxj32z"/><path class="yeqoigbkh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:flat-shading"} {...others} />);
}

export default Component;
