import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/t/tlkwrnzaq.css';
import '../../css/e/ei2vo2bhj.css';
import '../../css/y/y4yl_dbyd.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="tlkwrnzaq"/><path class="ei2vo2bhj"/><path class="y4yl_dbyd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:database-connection"} {...others} />);
}

export default Component;
