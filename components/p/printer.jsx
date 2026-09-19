import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/q/qz-v_bclj.css';
import '../../css/j/j2g07m_xf.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="hntgybcog"><rect class="qz-v_bclj"/><path class="j2g07m_xf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"charm:printer"} {...others} />);
}

export default Component;
