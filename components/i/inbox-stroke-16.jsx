import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/v/vbgl25kdf.css';
import '../../css/x/xjocs_-vc.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="h01tyzbfu"><rect class="vbgl25kdf"/><path class="xjocs_-vc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:inbox-stroke-16"} {...others} />);
}

export default Component;
