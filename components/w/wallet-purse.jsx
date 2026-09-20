import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/ntyet9bif.css';
import '../../css/z/ze3stvb-e.css';
import '../../css/h/hwz8extfr.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="ntyet9bif"/><path class="ze3stvb-e"/><path class="hwz8extfr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:wallet-purse"} {...others} />);
}

export default Component;
