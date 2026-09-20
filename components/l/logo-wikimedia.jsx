import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xpgnasd1n.css';
import '../../css/p/psgevsbih.css';
import '../../css/g/gs86xrbnh.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="xpgnasd1n"/><path class="psgevsbih"/><circle class="gs86xrbnh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ooui:logo-wikimedia"} {...others} />);
}

export default Component;
