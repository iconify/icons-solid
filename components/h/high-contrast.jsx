import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.wvdq25b5e {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M14.375 2.75h-4.75q-2.848 0-4.861 2.014T2.75 9.625v4.75q0 2.848 2.014 4.861q.697.698 1.494 1.153q.018-.119.072-.226t.14-.193l13.5-13.5q.085-.086.193-.14q.107-.054.226-.072q-.455-.797-1.153-1.494q-2.013-2.014-4.861-2.014");
}
</style><path class="wvdq25b5e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-solid:high-contrast"} {...others} />);
}

export default Component;
