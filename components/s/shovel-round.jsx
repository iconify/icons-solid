import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.f3pu76ajn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m11 13l2 2a1.414 1.414 0 0 1 0 2c-.64.64-1.36 1-2 1H9a3 3 0 0 1-3-3v-2c0-.64.36-1.36 1-2a1.414 1.414 0 0 1 2 0zm0 0l6-6m-2-2l4 4");
}
</style><path class="f3pu76ajn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:shovel-round"} {...others} />);
}

export default Component;
