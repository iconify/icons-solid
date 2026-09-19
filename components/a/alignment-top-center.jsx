import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gopnm44um.css';
import '../../css/l/ljdas5boi.css';
import '../../css/y/yz9q7dbbc.css';
import '../../css/i/i68n06bsl.css';
import '../../css/v/vmpuxyn0b.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="gopnm44um"><rect class="ljdas5boi"/><path class="yz9q7dbbc"/><path class="i68n06bsl"/><path class="vmpuxyn0b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:alignment-top-center"} {...others} />);
}

export default Component;
