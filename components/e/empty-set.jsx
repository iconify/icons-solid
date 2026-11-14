import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.a8d2otb_h {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M8.979 18.615q1.379.635 3.021.635q3.003 0 5.127-2.123T19.25 12t-2.123-5.127q-.395-.394-.82-.715zm6.042-13.23Q13.642 4.75 12 4.75q-3.003 0-5.127 2.123T4.75 12t2.123 5.127q.395.394.82.715z");
}
</style><path class="a8d2otb_h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-solid:empty-set"} {...others} />);
}

export default Component;
