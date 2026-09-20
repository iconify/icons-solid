import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g8ajiubdt.css';
import '../../css/q/qw3mm7brb.css';
import '../../css/y/ypjkckbgw.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="g8ajiubdt"/><path class="qw3mm7brb"/><path class="ypjkckbgw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:cucumber"} {...others} />);
}

export default Component;
