import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/n9x6vcc-x.css';
import '../../css/s/snmwq-m5o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="n9x6vcc-x"/><path class="snmwq-m5o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:clef-bass"} {...others} />);
}

export default Component;
