import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/j/jq9ky7bgs.css';
import '../../css/i/itbxvoegv.css';
import '../../css/n/ninpmzvqt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="jq9ky7bgs"/><path class="itbxvoegv"/><path class="ninpmzvqt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:assignments"} {...others} />);
}

export default Component;
