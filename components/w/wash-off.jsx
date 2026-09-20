import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/n3mq2qbdv.css';
import '../../css/l/le0vbxbdc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="n3mq2qbdv"/><path class="le0vbxbdc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:wash-off"} {...others} />);
}

export default Component;
