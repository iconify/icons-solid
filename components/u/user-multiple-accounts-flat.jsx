import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/l/lo1dnac6c.css';
import '../../css/z/zp6ey7xyk.css';
import '../../css/s/sv6qal5dy.css';

const viewBox = {"width":48,"height":48};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="lo1dnac6c"/><path class="zp6ey7xyk"/><path class="sv6qal5dy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:user-multiple-accounts-flat"} {...others} />);
}

export default Component;
