import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/l/l7udlhshy.css';
import '../../css/i/i582-vbiv.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="l7udlhshy"/><path class="i582-vbiv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:information-desk"} {...others} />);
}

export default Component;
