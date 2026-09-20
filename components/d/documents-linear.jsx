import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/i/idi453daq.css';
import '../../css/z/zpnbjy47f.css';
import '../../css/v/v7xtrdgds.css';
import '../../css/j/jj9sgub3y.css';
import '../../css/s/sn70fibvm.css';
import '../../css/r/rldmr4bdt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="idi453daq"/><path class="zpnbjy47f"/><path class="v7xtrdgds"/><path class="jj9sgub3y"/><path class="sn70fibvm"/><path class="rldmr4bdt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:documents-linear"} {...others} />);
}

export default Component;
