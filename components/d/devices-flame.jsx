import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/sj9f2k2qh.css';
import '../../css/f/f8oewi22k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="sj9f2k2qh"/><path class="f8oewi22k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:devices-flame"} {...others} />);
}

export default Component;
