import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/x/xhdah4bbl.css';
import '../../css/c/cahgxccet.css';
import '../../css/i/iu_7h2b0u.css';
import '../../css/j/jtgskbcrm.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ufeehvblu"><rect class="xhdah4bbl"/><path class="cahgxccet"/><path class="iu_7h2b0u"/><path class="jtgskbcrm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:align-text-center-one"} {...others} />);
}

export default Component;
