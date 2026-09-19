import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/macbe7bdm.css';
import '../../css/l/lw3w-bciy.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="macbe7bdm"/><path class="lw3w-bciy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon-plain:appwrite"} {...others} />);
}

export default Component;
