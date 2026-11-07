import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/li7-h_b7c.css';
import '../../css/q/qjafifbsn.css';
import '../../css/e/eq2j71b9x.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="li7-h_b7c"/><path class="qjafifbsn"/><path class="eq2j71b9x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:bag-check-bold-duotone"} {...others} />);
}

export default Component;
