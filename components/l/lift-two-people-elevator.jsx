import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/w/wnl9hwkia.css';
import '../../css/u/uf60c4b1b.css';
import '../../css/s/s03jz_ioe.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="wnl9hwkia"/><path class="uf60c4b1b"/><path class="s03jz_ioe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:lift-two-people-elevator"} {...others} />);
}

export default Component;
