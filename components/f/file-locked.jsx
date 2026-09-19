import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/s/srmhdmbic.css';
import '../../css/g/gaomxbc9t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="srmhdmbic"/><path class="gaomxbc9t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:file-locked"} {...others} />);
}

export default Component;
