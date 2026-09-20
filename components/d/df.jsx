import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d0g_cn3lg.css';
import '../../css/w/waeg4lbhw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="d0g_cn3lg"/><path class="waeg4lbhw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:df"} {...others} />);
}

export default Component;
