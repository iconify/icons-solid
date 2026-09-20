import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/vu_--6bmx.css';
import '../../css/g/gowt-43lr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="vu_--6bmx"/><path class="gowt-43lr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:devices"} {...others} />);
}

export default Component;
