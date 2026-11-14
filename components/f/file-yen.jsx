import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/f/fi4vrhbhi.css';
import '../../css/e/eekqg7krm.css';
import '../../css/q/q1w16kuvv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="fi4vrhbhi"/><path class="eekqg7krm"/><path class="q1w16kuvv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:file-yen"} {...others} />);
}

export default Component;
