import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fllq90bkl.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="fllq90bkl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:pdfmathtranslate-light"} {...others} />);
}

export default Component;
