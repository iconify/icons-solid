import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/mzp6wqb3w.css';
import '../../css/t/tx254pblf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="mzp6wqb3w"/><path class="tx254pblf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:receipt-duotone"} {...others} />);
}

export default Component;
