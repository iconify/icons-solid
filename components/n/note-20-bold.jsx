import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aopgjf_lo.css';
import '../../css/f/f-1ndobgc.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="aopgjf_lo"/><path class="f-1ndobgc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:note-20-bold"} {...others} />);
}

export default Component;
