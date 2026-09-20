import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/owl1zxb0g.css';
import '../../css/m/m21ujybmf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="owl1zxb0g"/><path class="m21ujybmf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:circles-relation"} {...others} />);
}

export default Component;
