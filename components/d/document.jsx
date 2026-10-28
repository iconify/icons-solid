import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/fagn0tzgu.css';
import '../../css/x/x0r_ediec.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="fagn0tzgu"/><path class="x0r_ediec"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"codex:document"} {...others} />);
}

export default Component;
