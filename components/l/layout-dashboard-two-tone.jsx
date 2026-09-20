import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/igf1pvrth.css';
import '../../css/a/ahvv0kbdw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="igf1pvrth"/><path class="ahvv0kbdw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:layout-dashboard-two-tone"} {...others} />);
}

export default Component;
