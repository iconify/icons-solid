import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.wzpl6p6df {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M8.641 3.141Q7.25 4.532 7.25 6.5t1.391 3.359T12 11.25t3.359-1.391T16.75 6.5t-1.391-3.359T12 1.75T8.641 3.141M7.25 17.5q0-1.968 1.391-3.359T12 12.75t3.359 1.391T16.75 17.5t-1.391 3.359T12 22.25t-3.359-1.391T7.25 17.5");
}
</style><path class="wzpl6p6df"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-solid:not-under-command"} {...others} />);
}

export default Component;
