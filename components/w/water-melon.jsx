import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jqax-6b-d.css';
import '../../css/f/f-qg8_yio.css';
import '../../css/o/ocxcer9cn.css';
import '../../css/g/gkfaaf7-a.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="jqax-6b-d"><path class="f-qg8_yio"/><path class="ocxcer9cn"/><path class="gkfaaf7-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:water-melon"} {...others} />);
}

export default Component;
