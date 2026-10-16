import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/prpf4nbyc.css';
import '../../css/c/cvgo0ielg.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="prpf4nbyc"/><path class="cvgo0ielg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:glacier-20"} {...others} />);
}

export default Component;
