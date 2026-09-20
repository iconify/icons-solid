import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/ie1i99bwi.css';
import '../../css/b/bxuamrbpm.css';
import '../../css/o/o8rmgetue.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ie1i99bwi"/><path class="bxuamrbpm"/><circle class="o8rmgetue"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:file-badge"} {...others} />);
}

export default Component;
