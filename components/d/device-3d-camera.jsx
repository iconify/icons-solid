import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/uow61wbyz.css';
import '../../css/r/ry2rqsybn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="uow61wbyz"/><path class="ry2rqsybn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:device-3d-camera"} {...others} />);
}

export default Component;
