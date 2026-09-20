import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qkljzzbeo.css';
import '../../css/b/bseabeb_j.css';
import '../../css/y/ygox79bep.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="qkljzzbeo"/><path class="bseabeb_j"/><circle class="ygox79bep"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:unlock-duotone-line"} {...others} />);
}

export default Component;
