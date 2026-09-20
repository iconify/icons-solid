import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/o/oboqkya6x.css';
import '../../css/t/t7myqtbem.css';
import '../../css/u/us043obkx.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><rect class="oboqkya6x"/><path class="t7myqtbem"/><circle class="us043obkx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-unlock-combination-combo-key-keyhole-lock-secure-security-square-unlock-unlocked"} {...others} />);
}

export default Component;
