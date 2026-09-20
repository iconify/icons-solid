import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qmkn_ihvi.css';
import '../../css/v/vcy7_pblu.css';
import '../../css/j/jt5hh3b6c.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="qmkn_ihvi"/><path class="vcy7_pblu"/><path class="jt5hh3b6c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:mail-outgoing-flat"} {...others} />);
}

export default Component;
