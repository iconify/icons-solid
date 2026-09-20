import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.wsxu_9rsb {
  fill: currentColor;
  d: path("M16.75 2A3.25 3.25 0 0 1 20 5.25v13.5A3.25 3.25 0 0 1 16.75 22h-9.5A3.25 3.25 0 0 1 4 18.75V5.25A3.25 3.25 0 0 1 7.25 2zm-5.44 6.493c-1-.64-2.31.077-2.31 1.263v4.495c0 1.186 1.312 1.902 2.31 1.262l3.502-2.247a1.5 1.5 0 0 0 0-2.526z");
}
</style><path class="wsxu_9rsb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:video-short-24-filled"} {...others} />);
}

export default Component;
