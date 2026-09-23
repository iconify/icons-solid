import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/axq4_tbdk.css';
import '../../css/p/pv47n0zht.css';
import '../../css/o/ojlzukb4x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="axq4_tbdk"/><path class="pv47n0zht"/><path class="ojlzukb4x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:cloud-sparkles-two-tone"} {...others} />);
}

export default Component;
