import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/q/qco7k5bdx.css';
import '../../css/v/vzotpc4wt.css';
import '../../css/o/o9g704bia.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="qco7k5bdx"/><path class="vzotpc4wt wm-k"/><path class="o9g704bia wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:traffic-light-sketch"} {...others} />);
}

export default Component;
