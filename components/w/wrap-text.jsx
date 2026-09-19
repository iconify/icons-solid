import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x9zy8wb3n.css';

const viewBox = {"width":368,"height":384};
const content = `<path class="x9zy8wb3n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"zmdi:wrap-text"} {...others} />);
}

export default Component;
