import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/l-jpoi6op.css';
import '../../css/f/fz04ghbpm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="l-jpoi6op"/><path class="fz04ghbpm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:house-plug"} {...others} />);
}

export default Component;
