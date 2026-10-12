import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qcdgpqbys.css';
import '../../css/y/ytka5ibqh.css';
import '../../css/s/savj5gbmt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="qcdgpqbys"/><path class="ytka5ibqh"/><circle transform="rotate(90 18.76 5.72)" class="savj5gbmt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:message-notification"} {...others} />);
}

export default Component;
