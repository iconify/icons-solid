import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/kwh0ribcs.css';
import '../../css/e/e40as4btc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="kwh0ribcs"/><path class="e40as4btc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:hand-finger-off"} {...others} />);
}

export default Component;
