import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vkaodlwyt.css';
import '../../css/n/na4i35b7t.css';
import '../../css/v/vckz0vbbe.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="vkaodlwyt"/><path class="na4i35b7t"/><path clip-rule="evenodd" class="vckz0vbbe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:file-scan"} {...others} />);
}

export default Component;
