import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.vbi1fhn1v {
  fill: currentColor;
  d: path("M5 20v-7H3v-2h6v2H7v7zM5 9V4h2v5zm4 0V7h2V4h2v3h2v2zm2 11v-9h2v9zm6 0v-3h-2v-2h6v2h-2v3zm0-7V4h2v9z");
}
</style><path class="vbi1fhn1v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:instant-mix-sharp"} {...others} />);
}

export default Component;
