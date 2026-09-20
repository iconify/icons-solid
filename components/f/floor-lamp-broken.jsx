import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/j/j02jjxvbk.css';
import '../../css/o/o9d_ombdl.css';
import '../../css/i/ick8o1b-y.css';
import '../../css/e/eqvcnnmyn.css';
import '../../css/n/nzno-7bcb.css';
import '../../css/d/dzj-pac0y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="j02jjxvbk"/><path class="o9d_ombdl"/><path class="ick8o1b-y"/><path class="eqvcnnmyn"/><path class="nzno-7bcb"/><path class="dzj-pac0y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:floor-lamp-broken"} {...others} />);
}

export default Component;
