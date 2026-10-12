import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/teq8_fbrn.css';
import '../../css/f/fgqud5bin.css';
import '../../css/o/oyr7g8b0l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="teq8_fbrn"/><path class="fgqud5bin"/><path class="oyr7g8b0l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:folder-warning"} {...others} />);
}

export default Component;
