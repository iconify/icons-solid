import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/a/aiiejrboy.css';
import '../../css/b/brs6cwbsn.css';
import '../../css/t/txclz031w.css';
import '../../css/d/dbez_pbsb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="aiiejrboy"/><path class="brs6cwbsn"/><path class="txclz031w"/><path class="dbez_pbsb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:sprout"} {...others} />);
}

export default Component;
