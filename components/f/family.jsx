import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3lph30dl.css';
import '../../css/l/ldf4t9bhz.css';
import '../../css/f/fl584qwff.css';
import '../../css/s/sw-j2u0ji.css';
import '../../css/a/a20-kub_e.css';
import '../../css/l/lcapaabac.css';
import '../../css/h/hqpf9p7hp.css';
import '../../css/g/gc4vi0bzn.css';
import '../../css/w/wutkfrbny.css';
import '../../css/i/ibd69nssl.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="l3lph30dl"><path class="ldf4t9bhz"/><path class="fl584qwff"/><path class="sw-j2u0ji"/><path class="a20-kub_e"/><path class="lcapaabac"/><path class="hqpf9p7hp"/><circle class="gc4vi0bzn"/><circle class="wutkfrbny"/><circle class="ibd69nssl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:family"} {...others} />);
}

export default Component;
