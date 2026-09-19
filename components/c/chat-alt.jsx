import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkgu3wbhs.css';
import '../../css/d/ds9yhnr-s.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dkgu3wbhs"/><path class="ds9yhnr-s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ci:chat-alt"} {...others} />);
}

export default Component;
