import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gdrk782lf.css';
import '../../css/d/d5j3t7b4j.css';
import '../../css/k/kz4o5-4xv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gdrk782lf wm-k"/><path class="d5j3t7b4j wm-a"/><path class="kz4o5-4xv wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:message-square-text"} {...others} />);
}

export default Component;
