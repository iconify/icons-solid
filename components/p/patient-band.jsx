import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/w/wmd9lmbwj.css';
import '../../css/f/fzyexpi6g.css';
import '../../css/m/mebbrxbhv.css';
import '../../css/j/jnficvbwd.css';
import '../../css/z/z996ppfqz.css';

const viewBox = {"width":48,"height":48};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="wmd9lmbwj"/><path class="fzyexpi6g"/><path class="mebbrxbhv"/><path class="jnficvbwd"/><path class="z996ppfqz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:patient-band"} {...others} />);
}

export default Component;
