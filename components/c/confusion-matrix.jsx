import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.xi2t1w64w {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M7.875 3.25h-1.25q-3.375 0-3.375 3.375v1.25q0 3.375 3.375 3.375h1.25q3.375 0 3.375-3.375v-1.25q0-3.375-3.375-3.375m8.25 0h1.25q3.375 0 3.375 3.375v1.25q0 3.375-3.375 3.375h-1.25q-3.375 0-3.375-3.375v-1.25q0-3.375 3.375-3.375m-8.25 9.5h-1.25q-3.375 0-3.375 3.375v1.25q0 3.375 3.375 3.375h1.25q3.375 0 3.375-3.375v-1.25q0-3.375-3.375-3.375m8.25 0h1.25q3.375 0 3.375 3.375v1.25q0 3.375-3.375 3.375h-1.25q-3.375 0-3.375-3.375v-1.25q0-3.375 3.375-3.375");
}
</style><path class="xi2t1w64w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-solid:confusion-matrix"} {...others} />);
}

export default Component;
