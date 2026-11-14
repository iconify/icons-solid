import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.o2rhtnbrk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 5v14m6-15v10m6-6v9M4.5 5h3m-3 14h3m3-15h3m-3 10h3m3-6h3m-3 9h3M6 12h.01M12 9h.01M18 12.5h.01");
}
</style><path class="o2rhtnbrk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:chart-error-bars"} {...others} />);
}

export default Component;
