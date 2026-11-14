import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.zfkym72dm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.1 15H2.5V9h1.2m16.6 0h1.2v6h-2.6M12 18.5c-3-2.5-5.5-4.75-5.5-8a3 3 0 0 1 5.5-2a3 3 0 0 1 5.5 2c0 3.25-2.5 5.5-5.5 8Z");
}
</style><path class="zfkym72dm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:heart-rate-strap"} {...others} />);
}

export default Component;
