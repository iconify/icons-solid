import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pf22gsbmi.css';
import '../../css/h/hlcjghfxa.css';
import '../../css/q/qyt2qibcp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pf22gsbmi wm-a"/><path class="hlcjghfxa wm-a"/><path class="qyt2qibcp wm-k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:list-checks"} {...others} />);
}

export default Component;
