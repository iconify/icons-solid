import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b7_amibcp.css';
import '../../css/w/wob-_umgw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="b7_amibcp"/><path class="wob-_umgw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bxs-file-json"} {...others} />);
}

export default Component;
