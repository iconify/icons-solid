import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nyjp9ub1w.css';
import '../../css/p/pdfzy9j9p.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nyjp9ub1w"/><path class="pdfzy9j9p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:cloud-waterdrop-bold"} {...others} />);
}

export default Component;
