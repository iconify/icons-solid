import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lrtqw4bir.css';
import '../../css/c/cat4-0bmn.css';
import '../../css/k/k-_vm5b-j.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="lrtqw4bir"/><path class="cat4-0bmn"/><path class="k-_vm5b-j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:linuxmint"} {...others} />);
}

export default Component;
