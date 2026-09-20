import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/f/fms9c0bwf.css';
import '../../css/s/svipsptog.css';
import '../../css/v/v96shnbnh.css';
import '../../css/q/q436q5anz.css';
import '../../css/u/u9816wbxc.css';
import '../../css/c/cs-py9fae.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="fms9c0bwf"/><path class="svipsptog"/><path class="v96shnbnh"/><path class="q436q5anz"/><path class="u9816wbxc"/><path class="cs-py9fae"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:threat-phone"} {...others} />);
}

export default Component;
