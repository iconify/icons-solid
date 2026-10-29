import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mgsgyebyg.css';
import '../../css/m/mq7oxpbxg.css';
import '../../css/a/ariofzdtp.css';
import '../../css/o/ooetbbcxz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mgsgyebyg wm-k"/><path class="mq7oxpbxg wm-a"/><path class="ariofzdtp wm-a"/><path class="ooetbbcxz wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:cast"} {...others} />);
}

export default Component;
