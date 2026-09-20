import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s9yto1rhv.css';
import '../../css/j/jbd_9xb3y.css';
import '../../css/s/sxesq2y8m.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="s9yto1rhv"/><path clip-rule="evenodd" class="jbd_9xb3y"/><path class="sxesq2y8m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:copy-paste-flat"} {...others} />);
}

export default Component;
