import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/u/uk6juhlzl.css';
import '../../css/b/b6sl7kbuk.css';
import '../../css/i/ib__xqbme.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ufeehvblu"><rect class="uk6juhlzl"/><path class="b6sl7kbuk"/><path class="ib__xqbme"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:box"} {...others} />);
}

export default Component;
