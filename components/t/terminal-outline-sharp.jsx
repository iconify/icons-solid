import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.jdba4nb9v {
  fill: currentColor;
  d: path("M2 20V4h20v16zm2-2h16V8H4zm3.5-1l-1.4-1.4L8.675 13l-2.6-2.6L7.5 9l4 4zm4.5 0v-2h6v2z");
}
</style><path class="jdba4nb9v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:terminal-outline-sharp"} {...others} />);
}

export default Component;
