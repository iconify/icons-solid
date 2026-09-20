import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/w72bo_4bl.css';
import '../../css/i/igf8p5ula.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="w72bo_4bl"/><path class="igf8p5ula"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:toolbox-duotone"} {...others} />);
}

export default Component;
