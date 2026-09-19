import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/flen3tbdj.css';
import '../../css/i/i2a_bx_0y.css';
import '../../css/l/lafzqbmme.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="flen3tbdj"><path class="i2a_bx_0y"/><path class="lafzqbmme"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"humbleicons:volume-1"} {...others} />);
}

export default Component;
