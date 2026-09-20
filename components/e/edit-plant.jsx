import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mkr4snbmn.css';

const viewBox = {"width":512,"height":512};
const content = `<path clip-rule="evenodd" class="mkr4snbmn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:edit-plant"} {...others} />);
}

export default Component;
