import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/l/lu_t7nbma.css';
import '../../css/a/a5ita3bje.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="bi12bsetm"><path class="lu_t7nbma"/><path class="a5ita3bje"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"grommet-icons:pocket"} {...others} />);
}

export default Component;
