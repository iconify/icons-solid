import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t3r41qfxn.css';
import '../../css/s/str-f1rew.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="t3r41qfxn"/><path class="str-f1rew"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"foundation:zoom-out"} {...others} />);
}

export default Component;
