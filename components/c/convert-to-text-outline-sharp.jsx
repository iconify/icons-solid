import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.f8r6q7bis {
  fill: currentColor;
  d: path("M3 21v-1h2.704q-1.2-.46-1.966-1.532q-.767-1.072-.767-2.43q0-1.759 1.241-2.995q1.242-1.235 3.01-1.235v1q-1.356 0-2.304.944t-.947 2.308q0 1.157.725 2.046q.725.89 1.843 1.127v-2.771h1V21zm6.923-1v-1H19V5H5v4.423H4V4h16v16zm0-3.5H13.5v-1H9.923zm0-4H16.5v-1H9.923zM7.5 8.5h9v-1h-9z");
}
</style><path class="f8r6q7bis"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:convert-to-text-outline-sharp"} {...others} />);
}

export default Component;
