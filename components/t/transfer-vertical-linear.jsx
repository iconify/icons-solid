import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/q/qkmssf62n.css';
import '../../css/v/v5zr4wbeq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="qkmssf62n"/><path class="v5zr4wbeq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:transfer-vertical-linear"} {...others} />);
}

export default Component;
