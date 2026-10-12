import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.q30d1dbvp {
  fill: currentColor;
  d: path("M1 10C1 8.3431 2.3431 7 4 7L20 7C21.6569 7 23 8.3431 23 10L23 14C23 15.6569 21.6569 17 20 17L4 17C2.3431 17 1 15.6569 1 14L1 10Z");
}
</style><path class="q30d1dbvp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:ratio-21-9-fill"} {...others} />);
}

export default Component;
