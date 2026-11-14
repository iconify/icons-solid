import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.k363lc3yt {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M4.752 4.752Q1.75 7.754 1.75 12t3.002 7.248T12 22.25t7.248-3.002T22.25 12t-3.002-7.248T12 1.75T4.752 4.752m7.881.845l3.5 5.5l.023.04q1.314 2.374-.064 4.712T12 18.186t-4.092-2.337q-1.378-2.338-.064-4.712l.023-.04l3.5-5.5q.08-.126.203-.211q.122-.086.267-.118q.146-.033.293-.007t.273.106q.14.09.23.23");
}
</style><path class="k363lc3yt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-solid:hygrometer"} {...others} />);
}

export default Component;
