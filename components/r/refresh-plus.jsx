import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/c/cq10oacbt.css';
import '../../css/k/kzmmr-3qy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="cq10oacbt"/><path class="kzmmr-3qy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:refresh-plus"} {...others} />);
}

export default Component;
