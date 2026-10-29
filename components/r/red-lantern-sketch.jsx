import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/f/f6346fozd.css';
import '../../css/a/atzm8bc8c.css';
import '../../css/e/embnm_8cc.css';
import '../../css/a/aumnm37ge.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="f6346fozd"/><path class="atzm8bc8c wm-k"/><path class="embnm_8cc wm-k"/><path class="aumnm37ge wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:red-lantern-sketch"} {...others} />);
}

export default Component;
