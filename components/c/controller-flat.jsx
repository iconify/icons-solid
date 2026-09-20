import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d_81o0h_n.css';
import '../../css/t/tghk--3go.css';
import '../../css/p/p2m2ozbfu.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="d_81o0h_n"/><path class="tghk--3go"/><path clip-rule="evenodd" class="p2m2ozbfu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:controller-flat"} {...others} />);
}

export default Component;
