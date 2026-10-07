import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/m/mkv2mkbph.css';
import '../../css/k/k61wbkcxn.css';
import '../../css/v/v6weoe5py.css';
import '../../css/l/li0l3_rxa.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="mkv2mkbph"/><path class="k61wbkcxn"/><path class="v6weoe5py"/><path class="li0l3_rxa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:peace-hand"} {...others} />);
}

export default Component;
