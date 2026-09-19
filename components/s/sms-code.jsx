import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/m/m-7u57b3n.css';
import '../../css/d/d3i_dbbrj.css';
import '../../css/e/ep70jebpf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="m-7u57b3n"/><path class="d3i_dbbrj"/><path class="ep70jebpf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:sms-code"} {...others} />);
}

export default Component;
