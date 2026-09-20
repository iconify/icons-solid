import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ot_dhmbyk.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ot_dhmbyk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ooui:edit-undo-ltr"} {...others} />);
}

export default Component;
