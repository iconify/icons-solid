import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/e/epuchabnl.css';
import '../../css/h/h22qwyaft.css';
import '../../css/u/uxo8fdb3q.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="epuchabnl"/><path class="h22qwyaft"/><path class="uxo8fdb3q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:job-search-magnifier-briefcase"} {...others} />);
}

export default Component;
