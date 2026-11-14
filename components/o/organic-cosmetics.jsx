import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.tibnkmofx {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M11.379 7.25q1.1-4.85 7.071-5.248q.149-.01.29.038q.142.047.254.146t.178.232t.076.282q.004.054 0 .108q-.232 3.013-2.093 4.498q1.595.3 1.595 2.194q0 .963-.412 1.514q.481.307.911.737q1.501 1.501 1.501 3.624v1.75q0 2.123-1.501 3.624t-3.624 1.501h-7.25q-2.123 0-3.624-1.501T3.25 17.125v-1.75q0-2.123 1.501-3.624q.43-.43.911-.737q-.412-.551-.412-1.514q0-2.25 2.25-2.25z");
}
</style><path class="tibnkmofx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-solid:organic-cosmetics"} {...others} />);
}

export default Component;
