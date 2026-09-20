import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/osryi6b4i.css';
import '../../css/n/nua3hhbht.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="osryi6b4i"/><path class="nua3hhbht"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"majesticons:ticket-check-line"} {...others} />);
}

export default Component;
