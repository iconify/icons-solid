import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xp53h7iuv.css';
import '../../css/c/cs02177wb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xp53h7iuv"/><path class="cs02177wb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:install-filled"} {...others} />);
}

export default Component;
