import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uzthrzbpn.css';
import '../../css/z/zvjeae8vn.css';
import '../../css/t/tdqgqzbcw.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="uzthrzbpn"/><path clip-rule="evenodd" class="zvjeae8vn"/><path class="tdqgqzbcw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:ui-panels-left-right-16"} {...others} />);
}

export default Component;
