import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/b/bip1gyzkx.css';
import '../../css/l/ll5ebi28y.css';
import '../../css/z/z2g23rxag.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="bip1gyzkx"/><path class="ll5ebi28y"/><path class="z2g23rxag"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"covid:covid19-virus-1"} {...others} />);
}

export default Component;
