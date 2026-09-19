import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/c/cf9hc0bbb.css';
import '../../css/l/le343eqle.css';
import '../../css/p/p_sbqi78u.css';
import '../../css/p/pjarycbkg.css';

const viewBox = {"width":48,"height":48};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="cf9hc0bbb"/><path class="le343eqle"/><path class="p_sbqi78u"/><path class="pjarycbkg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:spine-outline"} {...others} />);
}

export default Component;
