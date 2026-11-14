import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.j26olwbbu {
  d: path("M15 21.5H3.5v-19H16v7.2M7.5 7h.01M12 7h.01M7.5 11.5h.01m4.49 0h.01");
}

.kbyq4bbqg {
  d: path("M8.25 21.5v-4h3v4M18 21l-2.25-3.25a3.25 3.25 0 1 1 4.5 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="j26olwbbu"/><path class="kbyq4bbqg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:pin-apartment"} {...others} />);
}

export default Component;
