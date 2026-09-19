import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/j/jeus15b5u.css';
import '../../css/o/ots0wtfha.css';
import '../../css/y/yq35rx1fi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="jeus15b5u"/><path class="ots0wtfha"/><path class="yq35rx1fi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:inbox-download"} {...others} />);
}

export default Component;
