import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/odsr5q1mz.css';
import '../../css/s/sp2z8f1qt.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="odsr5q1mz"/><path class="sp2z8f1qt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:filter-bold-duotone"} {...others} />);
}

export default Component;
