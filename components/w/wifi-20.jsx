import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g-3px956v.css';
import '../../css/x/x5abyccpj.css';
import '../../css/z/z05xz87_i.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="g-3px956v"/><path class="x5abyccpj"/><path class="z05xz87_i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:wifi-20"} {...others} />);
}

export default Component;
