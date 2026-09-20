import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e7xctpbbo.css';
import '../../css/g/gv04lno8w.css';
import '../../css/e/ezvz3nfau.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="e7xctpbbo"><path class="gv04lno8w"/><path class="ezvz3nfau"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:rotate-angle-45-flat"} {...others} />);
}

export default Component;
