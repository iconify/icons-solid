import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/a/a1l92fp8o.css';
import '../../css/r/rv_3mobsj.css';
import '../../css/d/dnhbys-pl.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ufeehvblu"><path class="a1l92fp8o"/><path class="rv_3mobsj"/><path class="dnhbys-pl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:application-one"} {...others} />);
}

export default Component;
