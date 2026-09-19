import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/c/czrrxsmtm.css';
import '../../css/o/o9m_n6zhw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="czrrxsmtm"/><path class="o9m_n6zhw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:merge"} {...others} />);
}

export default Component;
