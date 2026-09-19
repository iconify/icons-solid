import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j2cg_xv5h.css';
import '../../css/g/g-_3ltj-p.css';
import '../../css/e/efspjbcxr.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="j2cg_xv5h"/><path class="g-_3ltj-p"/><circle class="efspjbcxr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:nail-polish"} {...others} />);
}

export default Component;
