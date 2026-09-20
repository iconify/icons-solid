import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/ig11wiq2g.css';
import '../../css/f/fkdpf6eac.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ig11wiq2g"/><path class="fkdpf6eac"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:settings-up"} {...others} />);
}

export default Component;
