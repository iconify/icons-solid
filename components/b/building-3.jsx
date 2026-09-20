import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n0tj4kbei.css';
import '../../css/m/m4_7k9qjb.css';
import '../../css/k/kfe_mib0c.css';
import '../../css/o/oztqt4b7y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="n0tj4kbei"/><path class="m4_7k9qjb"/><path class="kfe_mib0c"/><path class="oztqt4b7y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:building-3"} {...others} />);
}

export default Component;
