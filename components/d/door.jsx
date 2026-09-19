import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mmh6un4qk.css';
import '../../css/i/iaergbsgk.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="mmh6un4qk"/><path class="iaergbsgk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cil:door"} {...others} />);
}

export default Component;
