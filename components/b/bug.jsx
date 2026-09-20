import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ydne_bc6v.css';
import '../../css/d/dvx2_-b-v.css';
import '../../css/j/jy19kibqs.css';
import '../../css/o/ollh4jb3j.css';
import '../../css/x/xezvhlv1r.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ydne_bc6v"><path class="dvx2_-b-v"/><path class="jy19kibqs"/><path class="ollh4jb3j"/><path class="xezvhlv1r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:bug"} {...others} />);
}

export default Component;
