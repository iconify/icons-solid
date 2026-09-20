import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/v/vs824-ymu.css';
import '../../css/l/lovkcu-ei.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="vs824-ymu"/><path class="lovkcu-ei"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:duplicate"} {...others} />);
}

export default Component;
