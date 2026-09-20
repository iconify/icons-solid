import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/brxeiy94q.css';
import '../../css/t/ty0pdocra.css';
import '../../css/b/bwx2uacmo.css';
import '../../css/n/nlz09ginz.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="brxeiy94q"/><path class="ty0pdocra"/><path clip-rule="evenodd" class="bwx2uacmo"/><path clip-rule="evenodd" class="nlz09ginz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:shipment-upload-flat"} {...others} />);
}

export default Component;
