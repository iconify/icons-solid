import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ou9qj3bbh.css';
import '../../css/x/xnplzxg2w.css';
import '../../css/t/t5wu_mbwg.css';
import '../../css/y/ycml7-bwi.css';
import '../../css/x/xgy8okbsb.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ou9qj3bbh"/><path class="xnplzxg2w"/><path class="t5wu_mbwg"/><path class="ycml7-bwi"/><path class="xgy8okbsb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:pulley-48-bold"} {...others} />);
}

export default Component;
