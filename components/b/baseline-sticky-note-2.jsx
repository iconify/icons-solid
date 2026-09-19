import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gnpfpe3_u {
  fill: currentColor;
  d: path("M19 3H4.99C3.89 3 3 3.9 3 5l.01 14c0 1.1.89 2 1.99 2h10l6-6V5c0-1.1-.9-2-2-2M7 8h10v2H7zm5 6H7v-2h5zm2 5.5V14h5.5z");
}
</style><path class="gnpfpe3_u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:baseline-sticky-note-2"} {...others} />);
}

export default Component;
