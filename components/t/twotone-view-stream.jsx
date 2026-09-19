import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hf527bb2u {
  fill: currentColor;
  d: path("M19 17H5v-4h14zM5 11V7h14v4z");
  opacity: var(--svg-opacity--0-3, 0.3);
}

.z1vyudaod {
  fill: currentColor;
  d: path("M3 7v10c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2m16 10H5v-4h14zM5 11V7h14v4z");
}
</style><path class="hf527bb2u"/><path class="z1vyudaod"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:twotone-view-stream"} {...others} />);
}

export default Component;
