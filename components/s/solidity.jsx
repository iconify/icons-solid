import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uypib39ja.css';
import '../../css/i/imes1f47p.css';
import '../../css/n/nh26eqbdu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="uypib39ja"><path class="imes1f47p"/><path class="nh26eqbdu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:solidity"} {...others} />);
}

export default Component;
