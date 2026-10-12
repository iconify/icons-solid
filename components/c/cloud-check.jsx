import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v_qa58biz.css';
import '../../css/o/odjrbuxck.css';
import '../../css/b/b6ss8dbul.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="v_qa58biz"/><path class="odjrbuxck"/><path class="b6ss8dbul"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:cloud-check"} {...others} />);
}

export default Component;
