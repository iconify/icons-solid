import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zgwpwkbxm.css';
import '../../css/l/lz5trxqpe.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="zgwpwkbxm"/><path class="lz5trxqpe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:language-outline"} {...others} />);
}

export default Component;
