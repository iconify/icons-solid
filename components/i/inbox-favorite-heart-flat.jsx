import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mymlz24ut.css';
import '../../css/n/nu11717ap.css';
import '../../css/p/p_u3nvbwf.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="mymlz24ut"/><path clip-rule="evenodd" class="nu11717ap"/><path class="p_u3nvbwf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:inbox-favorite-heart-flat"} {...others} />);
}

export default Component;
