import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/w/w_usocc0j.css';
import '../../css/i/iw9cr4b3e.css';
import '../../css/f/fkjj02b2j.css';
import '../../css/a/aj5aclbbo.css';
import '../../css/j/jc7qrbb_w.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="w_usocc0j"/><path class="iw9cr4b3e"/><path class="fkjj02b2j"/><path class="aj5aclbbo"/><path class="jc7qrbb_w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:bug-virus-browser"} {...others} />);
}

export default Component;
