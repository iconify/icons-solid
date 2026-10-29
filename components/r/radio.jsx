import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o6g5v731f.css';
import '../../css/w/wdu67f6zs.css';
import '../../css/j/j829ogbst.css';
import '../../css/y/y47cdmcvq.css';
import '../../css/b/bbjw-ccll.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="o6g5v731f wm-a"/><path class="wdu67f6zs wm-k"/><path class="j829ogbst wm-a"/><path class="wm-a y47cdmcvq"/><path class="bbjw-ccll wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:radio"} {...others} />);
}

export default Component;
