import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q33ngubua.css';
import '../../css/i/i2chtjarf.css';
import '../../css/r/rdhphbcfw.css';
import '../../css/u/upn7tpbmc.css';
import '../../css/b/bjnn66bdm.css';
import '../../css/r/r1d2zdbnd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="q33ngubua"/><path clip-rule="evenodd" class="i2chtjarf"/><path class="rdhphbcfw"/><path clip-rule="evenodd" class="upn7tpbmc"/><path class="bjnn66bdm"/><path class="r1d2zdbnd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:wi-fi-router-round-outline"} {...others} />);
}

export default Component;
