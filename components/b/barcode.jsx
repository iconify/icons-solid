import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mewpivo4d.css';
import '../../css/q/qwl579bdm.css';
import '../../css/w/wtr8rs7wt.css';
import '../../css/r/rxs9xdbcc.css';
import '../../css/c/cnccctggq.css';
import '../../css/h/h-3b5urmo.css';
import '../../css/m/mol_o6bgk.css';
import '../../css/o/obog4ab0u.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mewpivo4d wm-shadow"/><path class="qwl579bdm"/><path class="wtr8rs7wt"/><path class="rxs9xdbcc"/><path class="cnccctggq"/><path class="h-3b5urmo wm-shine"/><path class="mol_o6bgk"/><path class="obog4ab0u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-plush:barcode"} {...others} />);
}

export default Component;
