import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/m/me4zmhbqc.css';
import '../../css/k/khq3t1zcp.css';
import '../../css/e/erc7edbxm.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="me4zmhbqc"/><path class="khq3t1zcp"/><path class="erc7edbxm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:credit-card-visa"} {...others} />);
}

export default Component;
