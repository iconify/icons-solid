import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/m/m_makfbdj.css';
import '../../css/m/m2504i8sf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="m_makfbdj"/><path class="m2504i8sf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:rocket"} {...others} />);
}

export default Component;
