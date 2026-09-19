import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.mzzcr1blp {
  fill: currentColor;
  d: path("M19 10.41V15h2V7h-8v2h4.59L12 14.59L4.41 7L3 8.41l9 9z");
}
</style><path class="mzzcr1blp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:twotone-call-missed-outgoing"} {...others} />);
}

export default Component;
