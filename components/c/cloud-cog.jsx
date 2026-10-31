import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/o/ovl8slriy.css';
import '../../css/s/s6zl_834f.css';
import '../../css/a/a5_9ef9ma.css';
import '../../css/v/vjaxozbzk.css';
import '../../css/m/m2ebxhp-u.css';
import '../../css/t/t43g-ujgi.css';
import '../../css/f/frntp8hxb.css';
import '../../css/r/rd699ibkl.css';
import '../../css/g/gqihhvbzg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="ovl8slriy"/><path class="s6zl_834f wm-s"/><path class="a5_9ef9ma"/><path class="vjaxozbzk wm-shine"/><path class="m2ebxhp-u wm-k"/><path class="t43g-ujgi wm-s"/><path class="frntp8hxb"/><path class="rd699ibkl"/><path class="gqihhvbzg wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:cloud-cog"} {...others} />);
}

export default Component;
