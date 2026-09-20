import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/y/yszjebc_r.css';
import '../../css/j/jlzv4qbob.css';
import '../../css/q/qv_d-ebdy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="yszjebc_r"/><path class="jlzv4qbob"/><path class="qv_d-ebdy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:align-vertical-spacing-linear"} {...others} />);
}

export default Component;
