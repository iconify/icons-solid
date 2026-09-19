import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gshe_di8n.css';
import '../../css/w/ww076bcwj.css';
import '../../css/n/ngo67db0o.css';
import '../../css/d/dy-ttul4u.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gshe_di8n"/><path class="ww076bcwj"/><path class="ngo67db0o"/><path class="dy-ttul4u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:confused"} {...others} />);
}

export default Component;
