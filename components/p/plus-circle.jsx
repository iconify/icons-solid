import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/z/z1j7k2dhf.css';
import '../../css/u/u5hstz1mw.css';
import '../../css/p/p6nwknb9q.css';
import '../../css/b/b4nbkyb1n.css';
import '../../css/o/oh---cbyh.css';
import '../../css/t/t1dxlobjp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="wm-shadow z1j7k2dhf"/><path class="u5hstz1mw"/><path class="p6nwknb9q"/><path class="b4nbkyb1n"/><path class="oh---cbyh"/><path class="t1dxlobjp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:plus-circle"} {...others} />);
}

export default Component;
