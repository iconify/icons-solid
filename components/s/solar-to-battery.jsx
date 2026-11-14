import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.degb61ifd {
  d: path("M4.5 2.5H14l-1 6H3.5Zm0 12.5h14v6.5h-14Zm14 1.75h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-1M9.25 2.5l-1 6M4 5.5h9.5");
}

.ls9lz-b6q {
  d: path("M13.5 5.5H17a2 2 0 0 1 2 2V12m-2-2l2 2l2-2");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="degb61ifd"/><path class="ls9lz-b6q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:solar-to-battery"} {...others} />);
}

export default Component;
