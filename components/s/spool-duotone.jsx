import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fnib-fkdq.css';
import '../../css/v/vpnmvd67u.css';
import '../../css/f/fqk39fbdn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="fnib-fkdq"/><path class="vpnmvd67u"/><path class="fqk39fbdn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:spool-duotone"} {...others} />);
}

export default Component;
