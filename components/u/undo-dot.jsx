import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/d7_idmhbt.css';
import '../../css/y/ytn63gonz.css';
import '../../css/k/kmqwfkbdg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="d7_idmhbt"/><path class="ytn63gonz"/><circle class="kmqwfkbdg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:undo-dot"} {...others} />);
}

export default Component;
