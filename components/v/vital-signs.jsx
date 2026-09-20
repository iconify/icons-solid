import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.p-kn-fbax {
  fill: currentColor;
  d: path("M8.948 18.089q-.211-.161-.31-.41L6.57 12.5H2.04v-1h5.238l2.146 5.446l4.37-10.644q.097-.249.307-.41t.475-.161q.266 0 .477.16q.211.162.31.411L17.47 11.5H22v1h-5.238l-2.185-5.466l-4.37 10.645q-.097.249-.307.41t-.475.161t-.477-.161");
}
</style><path class="p-kn-fbax"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:vital-signs"} {...others} />);
}

export default Component;
