import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rhgf4oq2b.css';
import '../../css/l/lguu5_wzr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rhgf4oq2b"/><path class="lguu5_wzr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:folder-import-filled"} {...others} />);
}

export default Component;
