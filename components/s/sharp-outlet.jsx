import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.xh6ppfbpk {
  fill: currentColor;
  d: path("M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2M8 12V7h2v5zm6 6h-4v-1.89c0-1 .68-1.92 1.66-2.08A2 2 0 0 1 14 16zm2-6h-2V7h2z");
}
</style><path class="xh6ppfbpk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-outlet"} {...others} />);
}

export default Component;
