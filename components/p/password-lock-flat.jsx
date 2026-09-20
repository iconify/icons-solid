import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/z/zbqsdtbha.css';
import '../../css/e/efzf-24zr.css';
import '../../css/o/o43u-8z7a.css';

const viewBox = {"width":48,"height":48};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="zbqsdtbha"/><path class="efzf-24zr"/><path class="o43u-8z7a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:password-lock-flat"} {...others} />);
}

export default Component;
