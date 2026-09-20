import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/n/nq7qkabjs.css';
import '../../css/d/de7-fmxhe.css';
import '../../css/u/uwvxd-bfn.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="nq7qkabjs"/><path class="de7-fmxhe"/><path class="uwvxd-bfn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:casino-777-slot-machine"} {...others} />);
}

export default Component;
