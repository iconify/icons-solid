import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/wrp5qbb3g.css';
import '../../css/o/oeg3jebkx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="wrp5qbb3g"/><path class="oeg3jebkx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:folder-input"} {...others} />);
}

export default Component;
