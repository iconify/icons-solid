import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/oge_lhbou.css';
import '../../css/o/oz2dgw-av.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="oge_lhbou"/><path class="oz2dgw-av"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:file-terminal"} {...others} />);
}

export default Component;
