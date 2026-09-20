import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ywys17btk.css';
import '../../css/j/j4njxhbrr.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ywys17btk"/><path class="j4njxhbrr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:gdms-dark"} {...others} />);
}

export default Component;
