import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.u87ou5q5m {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M5.125 1.75h.75q3.375 0 3.375 3.375v13.75q0 3.375-3.375 3.375h-.75q-3.375 0-3.375-3.375V5.125q0-3.375 3.375-3.375m13.75 0h-5q-3.375 0-3.375 3.375v.75q0 3.375 3.375 3.375h5q3.375 0 3.375-3.375v-.75q0-3.375-3.375-3.375m-5 8.75h5q3.375 0 3.375 3.375v5q0 3.375-3.375 3.375h-5q-3.375 0-3.375-3.375v-5q0-3.375 3.375-3.375");
}
</style><path class="u87ou5q5m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-solid:layout-template"} {...others} />);
}

export default Component;
