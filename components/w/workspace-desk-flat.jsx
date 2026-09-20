import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/iiqd2ab-u.css';
import '../../css/n/nfked6bdz.css';
import '../../css/m/mb-o73f0t.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="iiqd2ab-u"/><path clip-rule="evenodd" class="nfked6bdz"/><path class="mb-o73f0t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:workspace-desk-flat"} {...others} />);
}

export default Component;
