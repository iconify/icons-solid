import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gj35uabzq.css';
import '../../css/s/sj53jabxf.css';
import '../../css/p/ptnzl-b1k.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="gj35uabzq"/><path class="sj53jabxf"/><path class="ptnzl-b1k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:windows-terminal-dark"} {...others} />);
}

export default Component;
