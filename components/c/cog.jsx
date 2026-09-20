import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/g7w-z6qcd.css';
import '../../css/b/bvan9ac7d.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="nrj6p8qat"><path class="g7w-z6qcd"/><path class="bvan9ac7d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"quill:cog"} {...others} />);
}

export default Component;
