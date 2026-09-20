import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s6nny44xw.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="s6nny44xw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ooui:table-add-column-after-rtl"} {...others} />);
}

export default Component;
