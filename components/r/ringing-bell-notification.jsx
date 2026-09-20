import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/u/ub9vppcpj.css';
import '../../css/f/f89knxb0k.css';
import '../../css/m/mitgmcb9w.css';
import '../../css/y/yy4nwtbvd.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="ub9vppcpj"/><path class="f89knxb0k"/><path class="mitgmcb9w"/><path class="yy4nwtbvd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:ringing-bell-notification"} {...others} />);
}

export default Component;
