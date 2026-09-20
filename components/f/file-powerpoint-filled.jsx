import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/enwlp0z_q.css';
import '../../css/m/mz6j3r8mu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="enwlp0z_q"/><path class="mz6j3r8mu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:file-powerpoint-filled"} {...others} />);
}

export default Component;
