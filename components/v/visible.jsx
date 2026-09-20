import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/j/jdber6m_i.css';
import '../../css/a/atsswfz2j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="jdber6m_i"/><path class="atsswfz2j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:visible"} {...others} />);
}

export default Component;
