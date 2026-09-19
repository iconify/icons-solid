import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s_txeacgn.css';
import '../../css/s/sn58b5b3f.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="s_txeacgn"/><path class="sn58b5b3f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cil:wallet"} {...others} />);
}

export default Component;
