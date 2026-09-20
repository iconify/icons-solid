import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/hqej--b6i.css';
import '../../css/t/tugds-b3r.css';
import '../../css/p/pm0g67oqy.css';
import '../../css/s/ssw690b0o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="hqej--b6i"/><rect class="tugds-b3r"/><path class="pm0g67oqy"/><rect class="ssw690b0o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"majesticons:checkbox-list-detail"} {...others} />);
}

export default Component;
