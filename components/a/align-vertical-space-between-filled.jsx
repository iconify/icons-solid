import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wmes9zbiw.css';
import '../../css/h/homzn5bbs.css';
import '../../css/s/s6a_vl58s.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wmes9zbiw"/><rect class="homzn5bbs"/><rect class="s6a_vl58s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:align-vertical-space-between-filled"} {...others} />);
}

export default Component;
