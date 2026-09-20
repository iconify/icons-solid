import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/nkqus69ar.css';
import '../../css/m/mketp7bns.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="nkqus69ar"/><path class="mketp7bns"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:tax-euro"} {...others} />);
}

export default Component;
