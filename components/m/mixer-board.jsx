import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.kxw1ktvpg {
  d: path("M3.5 2.5h17a1 1 0 0 1 1 1v17a1 1 0 0 1-1 1h-17a1 1 0 0 1-1-1v-17a1 1 0 0 1 1-1ZM7 6v6.5m0 3V18");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xdelhfbak {
  d: path("M5.5 14a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0ZM12 6v1.5m0 3V18m-1.5-9a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0ZM17 6v7.5m0 3V18m-1.5-3a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Z");
}
</style><g class="ulnmmdpxh"><path class="kxw1ktvpg"/><path class="xdelhfbak"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:mixer-board"} {...others} />);
}

export default Component;
