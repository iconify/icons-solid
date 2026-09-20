import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m8o37xbsi.css';
import '../../css/o/ozhrcvezr.css';
import '../../css/n/nxg4h0b8x.css';
import '../../css/s/spa_47bei.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="m8o37xbsi"/><path class="ozhrcvezr"/><path class="nxg4h0b8x"/><path class="spa_47bei"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:maticx"} {...others} />);
}

export default Component;
