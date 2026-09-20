import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y_hak7-9q.css';
import '../../css/n/n8g0hetvt.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="y_hak7-9q"/><path class="n8g0hetvt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:plus-sign"} {...others} />);
}

export default Component;
