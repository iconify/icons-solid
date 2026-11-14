import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dfx58ub0p {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M7.177 3.75h9.646q1.579-.001 2.258 1.425t-.317 2.652l-3.79 4.664q-.224.275-.224.63v4.797q.001 1.545-1.381 2.237l-1.034.516q-1.063.531-2.074-.094q-1.011-.624-1.011-1.813v-5.643q0-.355-.224-.63l-3.79-4.664q-.996-1.226-.317-2.652T7.177 3.75");
}
</style><path class="dfx58ub0p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-solid:filter"} {...others} />);
}

export default Component;
