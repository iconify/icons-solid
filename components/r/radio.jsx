import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.t51immbsn {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M4.752 4.752Q1.75 7.754 1.75 12t3.002 7.248T12 22.25t7.248-3.002T22.25 12t-3.002-7.248T12 1.75T4.752 4.752M7.25 12q0-1.968 1.391-3.359T12 7.25t3.359 1.391T16.75 12t-1.391 3.359T12 16.75t-3.359-1.391T7.25 12");
}
</style><path class="t51immbsn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-solid:radio"} {...others} />);
}

export default Component;
