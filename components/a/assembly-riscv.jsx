import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c_sm72a9p.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="c_sm72a9p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"file-icons:assembly-riscv"} {...others} />);
}

export default Component;
