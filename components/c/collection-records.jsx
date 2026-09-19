import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/b/bnodaob4x.css';
import '../../css/w/wmhdlspux.css';
import '../../css/b/b_nvuk92z.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path class="bnodaob4x"/><path class="wmhdlspux"/><path class="b_nvuk92z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:collection-records"} {...others} />);
}

export default Component;
