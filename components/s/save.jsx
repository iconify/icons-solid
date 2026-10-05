import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/r/riyxgzgms.css';
import '../../css/c/ct5xi-ksm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="riyxgzgms"/><path class="ct5xi-ksm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:save"} {...others} />);
}

export default Component;
