import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/j/js99oebrf.css';
import '../../css/r/rz6frnslz.css';
import '../../css/i/i7udtsooe.css';
import '../../css/q/qegdji1er.css';

const viewBox = {"width":48,"height":48};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="js99oebrf"/><path class="rz6frnslz"/><path class="i7udtsooe"/><path class="qegdji1er"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:pills-32x-outline"} {...others} />);
}

export default Component;
