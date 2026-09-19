import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bo4avb77y.css';

const viewBox = {"width":1024,"height":1280};
const content = `<g transform="translate(0 1280) scale(1 -1)"><path class="bo4avb77y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:angle-double-down"} {...others} />);
}

export default Component;
