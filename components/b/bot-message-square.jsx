import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/h/havwit_8r.css';
import '../../css/t/tcpezbwne.css';
import '../../css/y/y65cjwb1i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="havwit_8r"/><path class="tcpezbwne"/><path class="y65cjwb1i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:bot-message-square"} {...others} />);
}

export default Component;
