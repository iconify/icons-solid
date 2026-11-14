import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.thc46tf3o {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M9.979 8.018q-1.736.486-3.106 1.855Q4.75 11.997 4.75 15t2.123 5.127T12 22.25t5.127-2.123Q19.25 18.003 19.25 15t-2.123-5.127q-1.37-1.369-3.106-1.855l.945-3.046Q15 4.864 15 4.75q0-3-3-3t-3 3q0 .114.034.222zM9.75 12q0-2.25 2.25-2.25T14.25 12T12 14.25T9.75 12");
}
</style><path class="thc46tf3o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-solid:kids-backpack-tag"} {...others} />);
}

export default Component;
