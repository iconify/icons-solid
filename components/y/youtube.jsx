import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/yllohy-5g.css';
import '../../css/y/ycu5lle2a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="yllohy-5g"/><path class="ycu5lle2a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:youtube"} {...others} />);
}

export default Component;
