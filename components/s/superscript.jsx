import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xd0q5bcmc.css';
import '../../css/x/xupp6jbel.css';
import '../../css/f/fwael9b_f.css';
import '../../css/e/exemn216f.css';
import '../../css/n/nim8y8lna.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wm-shadow xd0q5bcmc"/><path class="wm-k xupp6jbel"/><path class="fwael9b_f wm-k"/><path class="exemn216f wm-a"/><path class="nim8y8lna wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:superscript"} {...others} />);
}

export default Component;
