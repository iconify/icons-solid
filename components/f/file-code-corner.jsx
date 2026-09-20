import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/zje_pcbst.css';
import '../../css/v/vcr0rwb7m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="zje_pcbst"/><path class="vcr0rwb7m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:file-code-corner"} {...others} />);
}

export default Component;
