import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.as1ud6bid {
  d: path("M9.75 12v5.5h2a2.75 2.75 0 0 0 0-5.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.z17na7seo {
  d: path("M6.5 5h11v16.5h-11ZM10 2.5h4");
}
</style><g class="ulnmmdpxh"><path class="z17na7seo"/><path class="as1ud6bid"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:battery-d-cell"} {...others} />);
}

export default Component;
