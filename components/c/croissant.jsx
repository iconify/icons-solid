import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3xtuk_0z.css';
import '../../css/y/ygk7g_hkh.css';
import '../../css/h/h96htpbxa.css';
import '../../css/e/epaeypyik.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="l3xtuk_0z"><path class="ygk7g_hkh"/><path class="h96htpbxa"/><path class="epaeypyik"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:croissant"} {...others} />);
}

export default Component;
