import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.mros15bdc {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("m14.167 5.76l6.473 11.243q.72 1.25-.003 2.499q-.722 1.248-2.164 1.248H5.527q-1.442 0-2.164-1.248q-.723-1.249-.003-2.499L9.833 5.76Q10.554 4.506 12 4.506t2.167 1.254");
}
</style><path class="mros15bdc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-solid:bleach-allowed"} {...others} />);
}

export default Component;
