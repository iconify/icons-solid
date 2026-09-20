import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/m/m9lr-xbek.css';
import '../../css/d/dw6ldwi_g.css';
import '../../css/s/sn70fibvm.css';
import '../../css/b/be_97dboc.css';
import '../../css/x/xirrt7bkz.css';
import '../../css/j/j3fqm3o_x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="m9lr-xbek"/><path class="dw6ldwi_g"/><path class="sn70fibvm"/><path class="be_97dboc"/><path class="xirrt7bkz"/><path class="j3fqm3o_x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:documents-minimalistic-line-duotone"} {...others} />);
}

export default Component;
