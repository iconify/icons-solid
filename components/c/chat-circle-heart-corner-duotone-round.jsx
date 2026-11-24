import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.b-h7tvbfg {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m8 20l-5 1l1-5a8.944 8.944 0 1 1 16-8m-3 8c-1-2-4-2-4 0s4 4 4 4s4-2 4-4s-3-2-4 0");
}

.ft5dv1b6b {
  fill: none;
}

.g1jrobc7j {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M8 12v8l-5 1l1-5a8.945 8.945 0 0 1 16-8h-8a4 4 0 0 0-4 4m9 4c1-2 4-2 4 0s-4 4-4 4s-4-2-4-4s3-2 4 0");
}
</style><g class="ft5dv1b6b"><path class="g1jrobc7j"/><path class="b-h7tvbfg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:chat-circle-heart-corner-duotone-round"} {...others} />);
}

export default Component;
