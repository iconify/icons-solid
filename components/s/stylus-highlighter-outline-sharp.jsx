import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ace361ucv {
  fill: currentColor;
  d: path("M7 16V3h2.475L17 6.725V16zm2-2h6V7.975L9 5zm-5 7l1-3h14l1 3zm5-7h6z");
}
</style><path class="ace361ucv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:stylus-highlighter-outline-sharp"} {...others} />);
}

export default Component;
