import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m-i491roh.css';
import '../../css/a/amho5bkqy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="m-i491roh wm-k"/><path class="amho5bkqy wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:redo"} {...others} />);
}

export default Component;
