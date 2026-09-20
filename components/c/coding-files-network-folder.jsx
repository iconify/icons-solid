import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/x/x3ra-pn6i.css';
import '../../css/y/yx33g_bbf.css';
import '../../css/h/hzwio7bqu.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="x3ra-pn6i"/><path class="yx33g_bbf"/><path class="hzwio7bqu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:coding-files-network-folder"} {...others} />);
}

export default Component;
