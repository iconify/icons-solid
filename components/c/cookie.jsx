import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/imnma-bab.css';
import '../../css/f/fju53jboa.css';
import '../../css/c/ck4f-q3mq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="imnma-bab wm-k"/><path class="fju53jboa wm-a"/><path class="ck4f-q3mq wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:cookie"} {...others} />);
}

export default Component;
