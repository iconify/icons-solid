import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.li96v1bko {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M5.125 1.75h2.75q3.375 0 3.375 3.375v2.75q0 3.375-3.375 3.375h-2.75q-3.375 0-3.375-3.375v-2.75q0-3.375 3.375-3.375m13.75 0h-2.75q-3.375 0-3.375 3.375v2.75q0 3.375 3.375 3.375h2.75q3.375 0 3.375-3.375v-2.75q0-3.375-3.375-3.375m-8.25 11h2.75q3.375 0 3.375 3.375v2.75q0 3.375-3.375 3.375h-2.75q-3.375 0-3.375-3.375v-2.75q0-3.375 3.375-3.375");
}
</style><path class="li96v1bko"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-solid:device-group"} {...others} />);
}

export default Component;
