import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/x/xa8ex-ief.css';
import '../../css/s/spa4e6bdk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="xa8ex-ief"/><path class="spa4e6bdk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:policy"} {...others} />);
}

export default Component;
