import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.a1r6jp_9t {
  d: path("M4 4.5V14l6.5 4.5h3L20 14V4.5M6.75 11h10.5M12 18.5v3");
}

.nak6rsenb {
  d: path("M4 4.5a8 2 0 1 0 16 0a8 2 0 1 0-16 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="nak6rsenb"/><path class="a1r6jp_9t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:sedimentation-tank"} {...others} />);
}

export default Component;
