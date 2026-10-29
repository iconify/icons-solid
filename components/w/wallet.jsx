import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d4odpfzdb.css';
import '../../css/p/pph7l_o6b.css';
import '../../css/n/n3gkzmbod.css';
import '../../css/v/v9kfhvbjv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="d4odpfzdb wm-k"/><path class="pph7l_o6b wm-k"/><path class="n3gkzmbod wm-a"/><path class="v9kfhvbjv wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:wallet"} {...others} />);
}

export default Component;
