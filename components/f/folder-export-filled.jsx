import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t2x1pjb-k.css';
import '../../css/q/qlez1nbos.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="t2x1pjb-k"/><path class="qlez1nbos"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:folder-export-filled"} {...others} />);
}

export default Component;
