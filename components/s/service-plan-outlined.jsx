import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sxydanhms.css';
import '../../css/e/egw0_e_yk.css';
import '../../css/g/grhwfqo-l.css';
import '../../css/d/dtbe3abpb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="sxydanhms"/><circle class="egw0_e_yk"/><path class="grhwfqo-l"/><path class="dtbe3abpb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eos-icons:service-plan-outlined"} {...others} />);
}

export default Component;
