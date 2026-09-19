import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z1v_5ihpb.css';
import '../../css/s/sco7l5bpn.css';
import '../../css/k/klhdv0ueo.css';
import '../../css/g/g8_0j8b7o.css';
import '../../css/w/w3n24fbgj.css';
import '../../css/z/zh-ujibha.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="z1v_5ihpb"/><circle class="sco7l5bpn"/><circle class="klhdv0ueo"/><circle class="g8_0j8b7o"/><circle class="w3n24fbgj"/><circle class="zh-ujibha"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:cookie"} {...others} />);
}

export default Component;
