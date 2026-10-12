import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.envxxde8o {
  d: path("M10.25 5.75h4.5v4.75h-5.5V5.75zm-1 7.75h5.5v4.75h-5.5z");
}

.qotlaf_8a {
  d: path("M6.25 2.75h11.5v18.5H6.25z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="qotlaf_8a"/><path class="envxxde8o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:photo-booth-sharp"} {...others} />);
}

export default Component;
