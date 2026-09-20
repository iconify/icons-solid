import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dojo7xbge {
  fill: currentColor;
  d: path("M7 17v-2h10v2zm-4-4v-2h2v2zm4 0v-2h2v2zm4 0v-2h2v2zm4 0v-2h2v2zm4 0v-2h2v2zM3 9V7h2v2zm4 0V7h2v2zm4 0V7h2v2zm4 0V7h2v2zm4 0V7h2v2z");
}
</style><path class="dojo7xbge"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:keyboard-keys-outline"} {...others} />);
}

export default Component;
