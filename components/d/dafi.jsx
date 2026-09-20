import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hz66p41ba.css';
import '../../css/x/xdb4trbrm.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="hz66p41ba"/><path class="xdb4trbrm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:dafi"} {...others} />);
}

export default Component;
