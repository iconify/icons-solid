import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dy0w3ccpt {
  d: path("M10 12a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm-4.5 0H10m4 0h4.5M12 14v4.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.z8t6aztrq {
  d: path("M5.5 12a6.5 6.5 0 1 0 13 0a6.5 6.5 0 1 0-13 0ZM2.75 9v6m18.5-6v6");
}
</style><g class="ulnmmdpxh"><path class="z8t6aztrq"/><path class="dy0w3ccpt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:paddle-shifters"} {...others} />);
}

export default Component;
