import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/flen3tbdj.css';
import '../../css/w/wmzd77btb.css';
import '../../css/f/fa2xeyb1j.css';
import '../../css/l/lvqax5g6n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="flen3tbdj"><path class="wmzd77btb"/><path class="fa2xeyb1j"/><path class="lvqax5g6n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:wallet-alt"} {...others} />);
}

export default Component;
