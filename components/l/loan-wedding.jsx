import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.jn9dktblk {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M4.934 7.934Q3.25 9.618 3.25 12t1.684 4.066T9 17.75q1.672 0 3-.83q1.328.83 3 .83q2.382 0 4.066-1.684T20.75 12t-1.684-4.066T15 6.25q-1.672 0-3 .83q-1.328-.83-3-.83q-2.382 0-4.066 1.684");
}
</style><path class="jn9dktblk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-solid:loan-wedding"} {...others} />);
}

export default Component;
