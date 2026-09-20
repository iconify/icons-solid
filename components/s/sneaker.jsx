import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/ashxupbtl.css';
import '../../css/p/pux3mabuf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ashxupbtl"/><path class="pux3mabuf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-lab:sneaker"} {...others} />);
}

export default Component;
