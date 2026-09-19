import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/ntgros_9i.css';
import '../../css/x/xvmpc_kfa.css';
import '../../css/i/iyd3g3q8g.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ntgros_9i"/><path clip-rule="evenodd" class="xvmpc_kfa"/><path clip-rule="evenodd" class="iyd3g3q8g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cuida:totem-outline"} {...others} />);
}

export default Component;
