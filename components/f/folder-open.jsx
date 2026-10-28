import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/uubqkbb-e.css';
import '../../css/v/vf4fx3y_a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="uubqkbb-e"/><path class="vf4fx3y_a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"codex:folder-open"} {...others} />);
}

export default Component;
