import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rj8qivbuk.css';
import '../../css/o/o3q91_but.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rj8qivbuk"/><path class="o3q91_but"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:file-code-filled"} {...others} />);
}

export default Component;
