import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hoj9du8fp.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="hoj9du8fp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ooui:table-add-column-after-ltr"} {...others} />);
}

export default Component;
