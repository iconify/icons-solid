import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aeig_sbyw.css';
import '../../css/z/zvd_26b4k.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="aeig_sbyw"/><path class="zvd_26b4k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:battery-charging-filled"} {...others} />);
}

export default Component;
