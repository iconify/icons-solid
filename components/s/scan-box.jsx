import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/b-ns_sbzj.css';
import '../../css/v/vtzl9s38x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="b-ns_sbzj"/><path class="vtzl9s38x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:scan-box"} {...others} />);
}

export default Component;
