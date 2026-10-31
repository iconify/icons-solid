import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/womlb45uf.css';
import '../../css/b/b-617bbup.css';
import '../../css/o/omdej3b8w.css';
import '../../css/t/tagrfhtdd.css';
import '../../css/t/tr0gefsln.css';

const viewBox = {"width":301,"height":151};
const content = `<g class="ft5dv1b6b"><path class="womlb45uf"/><path class="b-617bbup"/><path class="omdej3b8w"/><path class="tagrfhtdd"/><path class="tr0gefsln"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cif:sc"} {...others} />);
}

export default Component;
