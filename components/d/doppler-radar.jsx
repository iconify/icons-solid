import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.i6qmzebfk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 13a4 4 0 0 1 8 0Zm1 8.5l3-8.5l3 8.5M12 7a7 7 0 0 1 3.5 4.75M13.75 4a10.5 10.5 0 0 1 5 7.25");
}
</style><path class="i6qmzebfk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:doppler-radar"} {...others} />);
}

export default Component;
