import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xcu-63jaj.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="xcu-63jaj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:edit-document-filled"} {...others} />);
}

export default Component;
