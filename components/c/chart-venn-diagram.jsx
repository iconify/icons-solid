import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kkb2mtbrd.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="kkb2mtbrd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:chart-venn-diagram"} {...others} />);
}

export default Component;
