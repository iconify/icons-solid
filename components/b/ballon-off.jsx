import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/xuo1qt70o.css';
import '../../css/w/w55v4dhmb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="xuo1qt70o"/><path class="w55v4dhmb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:ballon-off"} {...others} />);
}

export default Component;
