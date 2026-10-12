import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/c/cwuhwnv2s.css';
import '../../css/z/zxcrsvhjq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><rect class="cwuhwnv2s"/><path class="zxcrsvhjq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:error-502"} {...others} />);
}

export default Component;
