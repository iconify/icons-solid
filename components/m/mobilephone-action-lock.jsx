import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/d/d0c44qvfi.css';
import '../../css/t/tyb-udb1w.css';
import '../../css/o/ooqomeb9g.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="d0c44qvfi"/><path class="tyb-udb1w"/><path class="ooqomeb9g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:mobilephone-action-lock"} {...others} />);
}

export default Component;
