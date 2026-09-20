import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/j/jc3hi7b2b.css';
import '../../css/m/m_h_k-0-k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="jc3hi7b2b"/><path class="m_h_k-0-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:programming-arrow"} {...others} />);
}

export default Component;
