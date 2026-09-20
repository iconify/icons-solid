import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/c/cvcfidcqc.css';
import '../../css/r/rvl5ncc5t.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="cvcfidcqc"/><path class="rvl5ncc5t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:fork-knife"} {...others} />);
}

export default Component;
