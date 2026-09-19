import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o93lq-byo.css';
import '../../css/q/qzkhf9znl.css';
import '../../css/g/grd5-pe1q.css';
import '../../css/m/mn9q66bmt.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="o93lq-byo"><path class="qzkhf9znl"/><path class="grd5-pe1q"/><path class="mn9q66bmt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:hard-disk-one"} {...others} />);
}

export default Component;
