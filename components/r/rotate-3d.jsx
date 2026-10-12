import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/a/agdx2ybkl.css';
import '../../css/m/mp71g22pc.css';
import '../../css/g/gqp0k6bqr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="agdx2ybkl"/><path class="mp71g22pc"/><path class="gqp0k6bqr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:rotate-3d"} {...others} />);
}

export default Component;
