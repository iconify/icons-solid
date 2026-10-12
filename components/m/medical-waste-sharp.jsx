import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cb-zm6bmm {
  d: path("M9.5 8.25c-3 1.75-4.75 5-4.75 8.25c0 3 2 4.75 4.75 4.75h5c2.75 0 4.75-1.75 4.75-4.75c0-3.25-1.75-6.5-4.75-8.25Z");
}

.ebo2m0b2n {
  d: path("M12 12a1.5 1.5 0 1 1 0 3a1.5 1.5 0 1 1 0-3Zm-1.75 3a1.5 1.5 0 1 1 0 3a1.5 1.5 0 1 1 0-3Zm3.5 0a1.5 1.5 0 1 1 0 3a1.5 1.5 0 1 1 0-3Zm-2.41-9L9.16 3.5l-.66-.75h7l-.66.75L12.66 6l-.66.75z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="cb-zm6bmm"/><path class="ebo2m0b2n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:medical-waste-sharp"} {...others} />);
}

export default Component;
