import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/fkdpf6eac.css';
import '../../css/f/f6el7d24k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="fkdpf6eac"/><path class="f6el7d24k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:cash-banknote-move-back"} {...others} />);
}

export default Component;
