import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/x/xzb_z2bum.css';
import '../../css/m/m5f5s512t.css';
import '../../css/g/guzqnlbhl.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="xzb_z2bum"/><path class="m5f5s512t"/><path class="guzqnlbhl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:microprocessor-computer-chip-search"} {...others} />);
}

export default Component;
