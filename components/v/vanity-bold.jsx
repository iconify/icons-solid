import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/i/i3uoprbyd.css';
import '../../css/v/v_ycjhbsq.css';
import '../../css/e/ev6o6pb9v.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="i3uoprbyd"/><path class="v_ycjhbsq"/><path class="ev6o6pb9v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:vanity-bold"} {...others} />);
}

export default Component;
