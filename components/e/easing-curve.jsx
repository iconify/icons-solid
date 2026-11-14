import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.wcqktue2q {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M18.314 4.306Q18.629 2.75 20.5 2.75q2.25 0 2.25 2.25T20.5 7.25q-1.79 0-2.156-1.424q-2.734.632-5.673 6.509q-3.386 6.771-6.985 7.359Q5.371 21.25 3.5 21.25q-2.25 0-2.25-2.25t2.25-2.25q1.79 0 2.156 1.424q2.734-.632 5.673-6.509q3.386-6.771 6.985-7.359");
}
</style><path class="wcqktue2q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-solid:easing-curve"} {...others} />);
}

export default Component;
