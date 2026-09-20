import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.s_f1444kv {
  fill: currentColor;
  d: path("M2 22V3h3V1h6v2h3v2h8v15h-8v2zm2-2h8v-2h8V7h-8V5H4zm5-3h2v-2H9zm0-7h2V8H9zm4 7h2v-2h-2zm0-7h2V8h-2zm4 7h2v-2h-2zm0-7h2V8h-2zm-9 2.5");
}
</style><path class="s_f1444kv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:camera-roll-outline-sharp"} {...others} />);
}

export default Component;
