import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ok-99oa8q.css';
import '../../css/m/m7s4zt-mm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ok-99oa8q"/><path class="m7s4zt-mm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:file-json-filled"} {...others} />);
}

export default Component;
