import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xe9llbc7v.css';
import '../../css/o/orqb6hbxo.css';
import '../../css/a/akv9j47ca.css';
import '../../css/g/g2p54sb3c.css';
import '../../css/o/ou_jazb0f.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wm-shadow xe9llbc7v"/><path class="orqb6hbxo wm-k"/><path class="akv9j47ca wm-k"/><path class="g2p54sb3c wm-a"/><path class="ou_jazb0f wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:contactless"} {...others} />);
}

export default Component;
