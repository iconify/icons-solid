import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/tgjy_ygpc.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/b/bw2nzbbmz.css';
import '../../css/i/i02d2-b-p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="tgjy_ygpc"/><g class="mc2zb0bvp"><path class="bw2nzbbmz"/><circle class="i02d2-b-p"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"struq:gauge"} {...others} />);
}

export default Component;
