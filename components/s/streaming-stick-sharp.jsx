import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ex4s5sbqi {
  d: path("M2.75 8.5h13v7h-13z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yv_8f-ink {
  d: path("M7.75 10.25v3.5l3-1.75Zm8-.25h5.5v4h-5.5z");
}
</style><g class="x2cwu0gfd"><path class="ex4s5sbqi"/><path class="yv_8f-ink"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:streaming-stick-sharp"} {...others} />);
}

export default Component;
