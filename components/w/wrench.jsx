import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hhpbuwbuk.css';
import '../../css/o/o8nz3vbpd.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="hhpbuwbuk"/><path class="o8nz3vbpd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:wrench"} {...others} />);
}

export default Component;
