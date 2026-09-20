import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pwj7unb0w.css';
import '../../css/q/q0jqwwdlw.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="pwj7unb0w"/><path class="q0jqwwdlw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:nixos"} {...others} />);
}

export default Component;
