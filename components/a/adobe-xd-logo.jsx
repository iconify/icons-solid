import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/r/rk816acaj.css';
import '../../css/r/rqugf6b2t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="rk816acaj"/><path class="rqugf6b2t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:adobe-xd-logo"} {...others} />);
}

export default Component;
