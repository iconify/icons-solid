import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/j/jdkh_nbgk.css';
import '../../css/s/sy-vmkanq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="jdkh_nbgk"/><path class="sy-vmkanq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:mail"} {...others} />);
}

export default Component;
