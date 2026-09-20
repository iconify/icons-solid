import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/i/iuhehmbsp.css';
import '../../css/z/zxhjaubkm.css';

const viewBox = {"width":21,"height":21};
const content = `<g transform="translate(4 1)" class="bi12bsetm"><path class="iuhehmbsp"/><circle class="zxhjaubkm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"system-uicons:lock"} {...others} />);
}

export default Component;
