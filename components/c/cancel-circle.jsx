import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/d/dbgvcxwad.css';
import '../../css/h/hvzcimbtx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><circle class="dbgvcxwad"/><path class="hvzcimbtx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"proicons:cancel-circle"} {...others} />);
}

export default Component;
