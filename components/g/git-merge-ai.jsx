import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/vsn0z__lx.css';
import '../../css/m/mz7t9b1rc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="vsn0z__lx"/><path class="mz7t9b1rc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:git-merge-ai"} {...others} />);
}

export default Component;
