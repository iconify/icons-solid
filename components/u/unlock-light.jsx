import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xa2fntb1l.css';
import '../../css/c/cls4e_bhi.css';
import '../../css/y/ygox79bep.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="xa2fntb1l"/><path class="cls4e_bhi"/><circle class="ygox79bep"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:unlock-light"} {...others} />);
}

export default Component;
