import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/otnv16btc.css';
import '../../css/a/aagla3kgr.css';
import '../../css/m/mmkzhsffi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="otnv16btc"/><path class="aagla3kgr"/><path class="mmkzhsffi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:smiley-rich"} {...others} />);
}

export default Component;
