import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yrmky_bdh.css';
import '../../css/z/zos2k5b9s.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yrmky_bdh"/><path class="zos2k5b9s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:excited-filled"} {...others} />);
}

export default Component;
