import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sqa3tkb1n.css';
import '../../css/m/mw7smgb6y.css';
import '../../css/p/pbtl3b4-t.css';
import '../../css/n/nxucm-4mi.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="sqa3tkb1n"><path class="mw7smgb6y"/><path class="pbtl3b4-t"/><path class="nxucm-4mi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:divide-solid"} {...others} />);
}

export default Component;
