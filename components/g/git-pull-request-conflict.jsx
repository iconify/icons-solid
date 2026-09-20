import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/thg0fpbfw.css';
import '../../css/m/m_40_db0e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="thg0fpbfw"/><path class="m_40_db0e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:git-pull-request-conflict"} {...others} />);
}

export default Component;
