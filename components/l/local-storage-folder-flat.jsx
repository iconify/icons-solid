import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zcxs2c9jq.css';
import '../../css/x/x7lashajg.css';
import '../../css/s/sn_3tnnme.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="zcxs2c9jq"/><path class="x7lashajg"/><path clip-rule="evenodd" class="sn_3tnnme"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:local-storage-folder-flat"} {...others} />);
}

export default Component;
