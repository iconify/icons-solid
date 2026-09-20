import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/wd_dzvh1l.css';
import '../../css/q/q7lwsabnj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="wd_dzvh1l"/><path class="q7lwsabnj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:file-type-corner-fill"} {...others} />);
}

export default Component;
