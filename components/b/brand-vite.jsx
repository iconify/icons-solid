import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/ltanx-bcv.css';
import '../../css/a/a4ma6hbgo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ltanx-bcv"/><path class="a4ma6hbgo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:brand-vite"} {...others} />);
}

export default Component;
