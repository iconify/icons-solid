import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/u/uly2peb3h.css';
import '../../css/d/dfhfczb-z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="uly2peb3h"/><path class="dfhfczb-z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:n-th-root"} {...others} />);
}

export default Component;
