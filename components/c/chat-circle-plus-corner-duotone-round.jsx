import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fkqjaz92g {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m8 20l-5 1l1-5a8.944 8.944 0 1 1 16-8m-7 9h8m-4-4v8");
}

.ft5dv1b6b {
  fill: none;
}

.h1y38cbhk {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M12 8a4 4 0 0 0-4 4v8l-5 1l1-5a8.945 8.945 0 0 1 16-8Z");
}
</style><g class="ft5dv1b6b"><path class="h1y38cbhk"/><path class="fkqjaz92g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:chat-circle-plus-corner-duotone-round"} {...others} />);
}

export default Component;
