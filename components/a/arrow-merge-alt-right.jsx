import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/gp8vybckn.css';
import '../../css/g/gj0r-sbps.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="gp8vybckn"/><path class="gj0r-sbps"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:arrow-merge-alt-right"} {...others} />);
}

export default Component;
