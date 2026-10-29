import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jal0xub-l.css';
import '../../css/d/dkqfi4v-u.css';
import '../../css/x/xx3nnccgm.css';
import '../../css/t/tn36-92ow.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jal0xub-l wm-s"/><path class="dkqfi4v-u wm-k"/><path class="wm-a xx3nnccgm"/><path class="tn36-92ow wm-k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:siren"} {...others} />);
}

export default Component;
