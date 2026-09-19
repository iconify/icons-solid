import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufom-nbao.css';
import '../../css/n/nm31ulbpm.css';
import '../../css/c/cfg6-7biq.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ufom-nbao"/><path class="nm31ulbpm"/><path class="cfg6-7biq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:spiralshell"} {...others} />);
}

export default Component;
