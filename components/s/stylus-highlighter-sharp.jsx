import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.skts64d7v {
  fill: currentColor;
  d: path("M7 16V3h2.475L17 6.725V16zm-3 5l1-3h14l1 3z");
}
</style><path class="skts64d7v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:stylus-highlighter-sharp"} {...others} />);
}

export default Component;
