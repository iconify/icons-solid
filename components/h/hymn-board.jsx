import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.i6tvv97qi {
  d: path("M6.25 5.25h4.5v3h-4.5Zm7 0h4.5v3h-4.5Zm-7 5.25h4.5v3h-4.5Zm7.75 0h3.75v3H14Z");
}

.st75w2zkc {
  d: path("M3.5 2.5h17v13.75h-17ZM12 16.25v5.25");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="st75w2zkc"/><path class="i6tvv97qi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:hymn-board"} {...others} />);
}

export default Component;
