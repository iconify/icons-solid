import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/u/u2j-9r34n.css';
import '../../css/p/p21ljo36x.css';
import '../../css/u/udrot0b5i.css';
import '../../css/b/b4_jjovhw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="u2j-9r34n"/><path class="p21ljo36x"/><path class="udrot0b5i"/><path class="b4_jjovhw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:transmission-square-line-duotone"} {...others} />);
}

export default Component;
