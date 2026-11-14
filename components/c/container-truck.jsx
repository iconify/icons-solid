import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.c5777qbfy {
  d: path("M15.5 18a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm-13-3.5h19");
}

.ewyhld8uy {
  d: path("M2.5 5.5H14v9H2.5ZM14 9h4l3.5 3.5V16H14m-9 2a2 2 0 1 0 4 0a2 2 0 1 0-4 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ewyhld8uy"/><path class="c5777qbfy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:container-truck"} {...others} />);
}

export default Component;
