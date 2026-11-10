import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/v/v9fyfmihe.css';
import '../../css/n/ncnm-sb9h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="v9fyfmihe"/><path class="ncnm-sb9h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:text-case-camel"} {...others} />);
}

export default Component;
