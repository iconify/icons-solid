import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/m/mwzzfe4ju.css';
import '../../css/d/dcm0qeb0c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="mwzzfe4ju"/><path class="dcm0qeb0c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:arrow-u-left"} {...others} />);
}

export default Component;
