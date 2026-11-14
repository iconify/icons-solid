import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.j5v3eybbn {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M12 1.75q2.382 0 4.066 1.684T17.75 7.5v9q0 2.382-1.684 4.066T12 22.25t-4.066-1.684T6.25 16.5v-9q0-2.382 1.684-4.066T12 1.75m0 9.75q-3 0-3 3t3 3t3-3t-3-3");
}
</style><path class="j5v3eybbn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-solid:doorbell-ring"} {...others} />);
}

export default Component;
