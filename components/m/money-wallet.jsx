import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/r/r3q1v9_ye.css';
import '../../css/m/ml2e-ebew.css';
import '../../css/e/e_p8zmu7q.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="r3q1v9_ye"/><path class="ml2e-ebew"/><path class="e_p8zmu7q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:money-wallet"} {...others} />);
}

export default Component;
