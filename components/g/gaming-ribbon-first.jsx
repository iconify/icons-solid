import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/m/m_4gf38nq.css';
import '../../css/v/vjkd57keb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="m_4gf38nq"/><path class="vjkd57keb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:gaming-ribbon-first"} {...others} />);
}

export default Component;
