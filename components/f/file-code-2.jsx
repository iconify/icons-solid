import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/w991asr4v.css';
import '../../css/k/kac42ebbo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="w991asr4v"/><path class="kac42ebbo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:file-code-2"} {...others} />);
}

export default Component;
