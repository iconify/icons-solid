import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yk_rluugm.css';
import '../../css/a/aftham49l.css';
import '../../css/s/s17eudbyu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wm-k yk_rluugm"/><path class="aftham49l wm-k"/><path class="s17eudbyu wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:donut"} {...others} />);
}

export default Component;
