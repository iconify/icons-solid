import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":28,"height":28};
const content = `<style>.o_2409bve {
  fill: currentColor;
  d: path("M2 9.75A3.75 3.75 0 0 1 5.75 6h8.5A3.75 3.75 0 0 1 18 9.75v8.5A3.75 3.75 0 0 1 14.25 22h-8.5A3.75 3.75 0 0 1 2 18.25zm21.252 10.933L19 17.747V10.25l4.252-2.936c1.16-.802 2.744.03 2.744 1.44v10.49c0 1.41-1.583 2.241-2.744 1.44");
}
</style><path class="o_2409bve"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:video-28-filled"} {...others} />);
}

export default Component;
