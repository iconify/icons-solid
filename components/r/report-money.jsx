import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/xptr09bzt.css';
import '../../css/u/ukw0b2h4r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="xptr09bzt"/><path class="ukw0b2h4r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:report-money"} {...others} />);
}

export default Component;
