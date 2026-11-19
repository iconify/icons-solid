import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f1m46db8y.css';
import '../../css/r/rbjip29as.css';
import '../../css/h/h27vhbcct.css';
import '../../css/s/snzqhcb0q.css';
import '../../css/w/wswa2fo_n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="f1m46db8y"/><path class="rbjip29as"/><circle class="h27vhbcct"/><circle class="snzqhcb0q"/><path class="wswa2fo_n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:dark-mode"} {...others} />);
}

export default Component;
