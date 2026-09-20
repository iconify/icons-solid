import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g_9kmbbto.css';
import '../../css/q/qjhlvsb3i.css';
import '../../css/q/qj361nbje.css';
import '../../css/d/dmcxc0b0p.css';
import '../../css/e/e1p6d4b6r.css';
import '../../css/c/cia76rb4x.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="g_9kmbbto"/><path class="qjhlvsb3i"/><path class="qj361nbje"/><path class="dmcxc0b0p"/><path class="e1p6d4b6r"/><path class="cia76rb4x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-emojis:anchor"} {...others} />);
}

export default Component;
