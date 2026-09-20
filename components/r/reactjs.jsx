import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c4if0pwhb.css';
import '../../css/j/jtth9xbar.css';
import '../../css/c/cxmb-_6za.css';
import '../../css/t/t6wz8cb3t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="c4if0pwhb"/><path class="jtth9xbar"/><path class="cxmb-_6za"/><circle class="t6wz8cb3t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"proicons:reactjs"} {...others} />);
}

export default Component;
