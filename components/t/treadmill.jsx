import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/waeu_qbxo.css';
import '../../css/f/f1yxcrm0m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="waeu_qbxo"/><path class="f1yxcrm0m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:treadmill"} {...others} />);
}

export default Component;
