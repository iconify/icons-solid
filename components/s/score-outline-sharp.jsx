import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.zg5g2tbsi {
  fill: currentColor;
  d: path("M3 21V3h18v18zm6-8.5l4 4l6-6V5H5v11.5zm3-.5V6h1.5v6zm3.5 0l-2-3l2-3h1.7l-2 3l2 3zM7 12V8.25h2.5V7.5H7V6h4v3.75H8.5v.75H11V12zm2 3l-4 4h14v-6l-6 6zm-4 4V5z");
}
</style><path class="zg5g2tbsi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:score-outline-sharp"} {...others} />);
}

export default Component;
