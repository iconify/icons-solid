import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.d72hkkb0i {
  d: path("M5.75 3.75h14.5V15l-1.41 1.41l-2.43 2.43L15 20.25H3.75V3.75z");
}

.eel4-ib9x {
  d: path("M20.25 15H15v5.25M7.5 8.75h9m-9 3.75H13");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="d72hkkb0i"/><path class="eel4-ib9x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:sticky-note-plus-sharp"} {...others} />);
}

export default Component;
