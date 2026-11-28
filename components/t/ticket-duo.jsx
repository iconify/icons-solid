import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nsg7oo49r.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/m/moa1v_bqj.css';
import '../../css/p/pyxfhqbxo.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nsg7oo49r secondary"/><g class="dt0cm9dhy primary"><path class="moa1v_bqj"/><path class="pyxfhqbxo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:ticket-duo"} {...others} />);
}

export default Component;
