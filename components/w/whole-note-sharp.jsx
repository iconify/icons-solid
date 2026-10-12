import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ez1f0isbh {
  d: path("M4.5 12a7.5 5.25 0 1 0 15 0a7.5 5.25 0 1 0-15 0Z");
}

.jdupctu0b {
  d: path("M9.89 13.77a2.75 1.75-40 1 0 4.22-3.54a2.75 1.75-40 1 0-4.22 3.54Z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="ez1f0isbh"/><path class="jdupctu0b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:whole-note-sharp"} {...others} />);
}

export default Component;
