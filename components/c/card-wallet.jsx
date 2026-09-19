import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/g/grv-2_02w.css';
import '../../css/t/trdt80b2a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="grv-2_02w"/><path class="trdt80b2a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:card-wallet"} {...others} />);
}

export default Component;
