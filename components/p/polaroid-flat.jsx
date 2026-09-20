import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/t/t6a4tpbqc.css';
import '../../css/i/ij7j57b7c.css';
import '../../css/x/xsjxoiu5f.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="t6a4tpbqc"/><path class="ij7j57b7c"/><path class="xsjxoiu5f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:polaroid-flat"} {...others} />);
}

export default Component;
