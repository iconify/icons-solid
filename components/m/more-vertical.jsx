import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.b_ca4vb3v {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M10.25 4.75Q10.25 3 12 3t1.75 1.75T12 6.5t-1.75-1.75m1.75 5.5q-1.75 0-1.75 1.75T12 13.75T13.75 12T12 10.25m-1.75 9q0-1.75 1.75-1.75t1.75 1.75T12 21t-1.75-1.75");
}
</style><path class="b_ca4vb3v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-solid:more-vertical"} {...others} />);
}

export default Component;
