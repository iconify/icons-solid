import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/q6wvflb5a.css';
import '../../css/h/hv4hdzbuu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="q6wvflb5a"/><path class="hv4hdzbuu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:brand-snapseed"} {...others} />);
}

export default Component;
