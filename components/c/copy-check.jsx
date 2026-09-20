import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/gsc5ntbis.css';
import '../../css/y/yiijfab4c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="gsc5ntbis"/><path class="yiijfab4c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:copy-check"} {...others} />);
}

export default Component;
