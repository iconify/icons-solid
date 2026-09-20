import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.e6wuk5vxx {
  fill: currentColor;
  d: path("M3 20.5v-1h18v1zm4.692-3.577V3.481h2.039v13.442zm6.577 0V9.481h2.039v7.442z");
}
</style><path class="e6wuk5vxx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:align-vertical-bottom-outline-sharp"} {...others} />);
}

export default Component;
