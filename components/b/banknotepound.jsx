import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dowbeobsa.css';
import '../../css/z/ziuz1w_mn.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="dowbeobsa"/><path class="ziuz1w_mn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:banknotepound"} {...others} />);
}

export default Component;
