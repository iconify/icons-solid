import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/xsn4d11_m.css';
import '../../css/q/qxxix3b9j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="xsn4d11_m"/><path class="qxxix3b9j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:waterpolo"} {...others} />);
}

export default Component;
