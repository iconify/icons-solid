import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x74-3dfpl.css';
import '../../css/i/ioq293cxn.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="x74-3dfpl"/><path class="ioq293cxn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gis:map-add"} {...others} />);
}

export default Component;
