import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.lhmj6kb2n {
  d: path("M14.639 12.111a5.5 5.5 0 1 1-8.223.503");
}

.ona3-9b-f {
  d: path("M8.75 4.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm2 4.75v5.25h5.5l2.5 6");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ona3-9b-f"/><path class="lhmj6kb2n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:pin-wheelchair"} {...others} />);
}

export default Component;
