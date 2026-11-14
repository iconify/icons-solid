import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.qgv_t39ay {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M7.5 6.25h9q2.382 0 4.066 1.684T22.25 12t-1.684 4.066T16.5 17.75h-9q-2.382 0-4.066-1.684T1.75 12t1.684-4.066T7.5 6.25");
}
</style><path class="qgv_t39ay"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-solid:pill-shape"} {...others} />);
}

export default Component;
