import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ewt6qubff {
  fill: currentColor;
  d: path("M3 21V3h6.2q.325-.9 1.088-1.45T12 1t1.713.55T14.8 3H21v18zm4-4h7v-2H7zm0-4h10v-2H7zm0-4h10V7H7zm5.538-4.962q.212-.213.212-.538t-.213-.537T12 2.75t-.537.213t-.213.537t.213.538t.537.212t.538-.213");
}
</style><path class="ewt6qubff"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:assignment-sharp"} {...others} />);
}

export default Component;
