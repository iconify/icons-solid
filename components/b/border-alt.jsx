import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w1fmkgb8a.css';
import '../../css/h/hpilvzbch.css';
import '../../css/s/sb7j3xbhz.css';
import '../../css/l/lxkefdb7m.css';
import '../../css/o/os4jquter.css';
import '../../css/h/ht0bfgbtv.css';
import '../../css/o/oar4g3b_o.css';
import '../../css/d/d9shv92nj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="w1fmkgb8a"/><circle class="hpilvzbch"/><circle class="sb7j3xbhz"/><circle class="lxkefdb7m"/><circle class="os4jquter"/><circle class="ht0bfgbtv"/><circle class="oar4g3b_o"/><circle class="d9shv92nj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uim:border-alt"} {...others} />);
}

export default Component;
