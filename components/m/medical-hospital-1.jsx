import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/v/v8ht6cblc.css';
import '../../css/j/jeh126nmi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="v8ht6cblc"/><path class="jeh126nmi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:medical-hospital-1"} {...others} />);
}

export default Component;
