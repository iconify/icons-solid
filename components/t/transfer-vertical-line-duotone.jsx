import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/q/qkmssf62n.css';
import '../../css/o/o8so0wb8y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="qkmssf62n"/><path class="o8so0wb8y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:transfer-vertical-line-duotone"} {...others} />);
}

export default Component;
