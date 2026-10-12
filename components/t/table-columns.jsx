import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vvcb88bko.css';
import '../../css/t/tuto6jbmx.css';
import '../../css/k/k8jrf-bba.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="vvcb88bko"/><path class="tuto6jbmx"/><rect transform="rotate(90 0 21.24)scale(-1 1)" class="k8jrf-bba"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:table-columns"} {...others} />);
}

export default Component;
