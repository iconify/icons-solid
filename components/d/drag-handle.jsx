import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.onw89m4ia {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M9 3.75q-1.75 0-1.75 1.75T9 7.25t1.75-1.75T9 3.75m4.25 1.75q0-1.75 1.75-1.75t1.75 1.75T15 7.25T13.25 5.5M9 10.25q-1.75 0-1.75 1.75T9 13.75T10.75 12T9 10.25M13.25 12q0-1.75 1.75-1.75T16.75 12T15 13.75T13.25 12M9 16.75q-1.75 0-1.75 1.75T9 20.25t1.75-1.75T9 16.75m4.25 1.75q0-1.75 1.75-1.75t1.75 1.75T15 20.25t-1.75-1.75");
}
</style><path class="onw89m4ia"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-solid:drag-handle"} {...others} />);
}

export default Component;
