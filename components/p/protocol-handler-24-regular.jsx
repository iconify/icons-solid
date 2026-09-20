import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.zcghiabji {
  fill: currentColor;
  d: path("m13.732 17.732l-1.025-1.025l1.06-1.06l1.026 1.024a1 1 0 0 0 1.414 0l3.964-3.964a1 1 0 0 0 0-1.415l-3.964-3.964a1 1 0 0 0-1.415 0l-1.025 1.025l-1.06-1.06l1.025-1.026a2.5 2.5 0 0 1 3.535 0l3.965 3.965a2.5 2.5 0 0 1 0 3.535l-3.965 3.965a2.5 2.5 0 0 1-3.535 0m-7-11.465l-3.965 3.965a2.5 2.5 0 0 0 0 3.535l3.965 3.965a2.5 2.5 0 0 0 3.535 0l3.965-3.965a2.5 2.5 0 0 0 0-3.535l-3.965-3.965a2.5 2.5 0 0 0-3.535 0m-2.904 5.026l3.965-3.965a1 1 0 0 1 1.414 0l3.964 3.965a1 1 0 0 1 0 1.414L9.207 16.67a1 1 0 0 1-1.414 0l-3.965-3.964a1 1 0 0 1 0-1.415");
}
</style><path class="zcghiabji"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:protocol-handler-24-regular"} {...others} />);
}

export default Component;
