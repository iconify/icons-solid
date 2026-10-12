import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gc1u27bek {
  d: path("M2.75 20.75V17H5v-4.25h2.5V8.5h2.25v-4h4.5v4h2.25v4.25H19V17h2.25v4.25H2.75z");
}

.uxxy73ggi {
  d: path("M10.25 9.5h3.5v11.75h-3.5zm0 3.5h3.5m-3.5 3.75h3.5");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="gc1u27bek"/><path class="uxxy73ggi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:ziggurat-sharp"} {...others} />);
}

export default Component;
