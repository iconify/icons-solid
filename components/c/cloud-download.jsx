import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/d1rl93c2g.css';
import '../../css/a/a171m_bbe.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="d1rl93c2g"/><path class="a171m_bbe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:cloud-download"} {...others} />);
}

export default Component;
