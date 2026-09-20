import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iin_flbnk.css';
import '../../css/x/xvwzm4bzj.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="iin_flbnk"/><path class="xvwzm4bzj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:bitwarden"} {...others} />);
}

export default Component;
