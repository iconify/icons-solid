import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/y/yokjecbgj.css';
import '../../css/c/c2e_vtbey.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="yokjecbgj"/><path clip-rule="evenodd" class="c2e_vtbey"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:arrow-right-circle-1"} {...others} />);
}

export default Component;
