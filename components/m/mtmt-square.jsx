import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uzkdiqb5h.css';

const viewBox = {"width":448,"height":512};
const content = `<path class="uzkdiqb5h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"academicons:mtmt-square"} {...others} />);
}

export default Component;
