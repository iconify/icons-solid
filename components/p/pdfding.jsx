import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jzzcr4b4h.css';
import '../../css/y/ynjyyh6_s.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="jzzcr4b4h"/><path class="ynjyyh6_s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:pdfding"} {...others} />);
}

export default Component;
