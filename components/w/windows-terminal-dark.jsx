import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wyepd0buq.css';
import '../../css/u/ujont2mwh.css';
import '../../css/p/ptnzl-b1k.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="wyepd0buq"/><path class="ujont2mwh"/><path class="ptnzl-b1k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:windows-terminal-dark"} {...others} />);
}

export default Component;
