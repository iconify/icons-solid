import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p3esgbc0q.css';
import '../../css/z/zy8g_6utu.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="p3esgbc0q"/><path class="zy8g_6utu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:kagi"} {...others} />);
}

export default Component;
