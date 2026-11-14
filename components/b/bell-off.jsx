import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/cv1l7ypcz.css';
import '../../css/g/gci296i3w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="cv1l7ypcz"/><path class="gci296i3w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"codex:bell-off"} {...others} />);
}

export default Component;
