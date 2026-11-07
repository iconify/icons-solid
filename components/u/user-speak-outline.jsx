import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/isvst5k4t.css';
import '../../css/m/mm5l9hb-p.css';
import '../../css/o/ovgsf7b1z.css';
import '../../css/j/j1tvjbbgs.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="isvst5k4t"/><path clip-rule="evenodd" class="mm5l9hb-p"/><path clip-rule="evenodd" class="ovgsf7b1z"/><path class="j1tvjbbgs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:user-speak-outline"} {...others} />);
}

export default Component;
