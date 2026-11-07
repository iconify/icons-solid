import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cywuxumuo.css';
import '../../css/o/ov2kgdwro.css';
import '../../css/x/xpyf_2bdb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cywuxumuo"/><path clip-rule="evenodd" class="ov2kgdwro"/><path class="xpyf_2bdb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:wi-fi-router-minimalistic-bold"} {...others} />);
}

export default Component;
