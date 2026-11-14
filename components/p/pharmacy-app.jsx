import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dxsxh5xhc {
  d: path("M6 2.5h12v19H6Z");
}

.rmvrhbcuk {
  d: path("m13.414 7.757l2.829 2.829l-5.657 5.657l-2.829-2.829Zm-2.828 2.829l2.828 2.828M10.5 18.5h3");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="dxsxh5xhc"/><path class="rmvrhbcuk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:pharmacy-app"} {...others} />);
}

export default Component;
