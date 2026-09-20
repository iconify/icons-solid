import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/ql3-6mw4a.css';
import '../../css/y/y81vbnbsu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ql3-6mw4a"/><path class="y81vbnbsu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:file-blocked-filled"} {...others} />);
}

export default Component;
