import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vpd2i7b0i.css';
import '../../css/t/th-zvacct.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="vpd2i7b0i"/><path class="th-zvacct"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"file-icons:hashicorp"} {...others} />);
}

export default Component;
