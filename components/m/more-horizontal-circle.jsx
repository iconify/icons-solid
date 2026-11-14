import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.b6ed13alh {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M4.752 4.752Q1.75 7.754 1.75 12t3.002 7.248T12 22.25t7.248-3.002T22.25 12t-3.002-7.248T12 1.75T4.752 4.752M6.25 12q0-1.5 1.5-1.5t1.5 1.5t-1.5 1.5t-1.5-1.5M12 10.5q1.5 0 1.5 1.5T12 13.5T10.5 12t1.5-1.5m2.75 1.5q0-1.5 1.5-1.5t1.5 1.5t-1.5 1.5t-1.5-1.5");
}
</style><path class="b6ed13alh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-solid:more-horizontal-circle"} {...others} />);
}

export default Component;
