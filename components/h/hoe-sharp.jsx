import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fgzxzkb0f {
  d: path("m7.58 15.73l2.14 1.18l.52.29l-.42.42l-2.7 2.7l-.42.42l-.29-.52l-1.18-2.14l-.29-.52l.42-.42l1.28-1.28l.42-.42z");
}

.noqxkm3ft {
  d: path("M21.25 2.75L10.5 13.5l-3.033.433L6 16.5");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="noqxkm3ft"/><path class="fgzxzkb0f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:hoe-sharp"} {...others} />);
}

export default Component;
