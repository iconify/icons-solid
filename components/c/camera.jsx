import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/ptzwreb-a.css';
import '../../css/u/ukvmc8bfw.css';
import '../../css/q/q_pmp1bxi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ptzwreb-a"/><circle class="ukvmc8bfw"/><path class="q_pmp1bxi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"akar-icons:camera"} {...others} />);
}

export default Component;
