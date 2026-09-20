import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/r/rpjys_o5s.css';
import '../../css/u/u0vw5sb0i.css';
import '../../css/w/we7ulucfs.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="rpjys_o5s"/><path class="u0vw5sb0i"/><path class="we7ulucfs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:mobilephone-action-voice-approved"} {...others} />);
}

export default Component;
