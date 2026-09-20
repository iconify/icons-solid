import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":128,"height":128};
const content = `<style>.w2vml8clc {
  fill: var(--svg-color--40c0e7, #40c0e7);
  d: path("M36.57 96h18.29V32H36.57zm36.57-64v64h18.29V32z");
}
</style><path class="w2vml8clc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noto-v1:pause-button"} {...others} />);
}

export default Component;
