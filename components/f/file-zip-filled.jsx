import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bn39dyf6b.css';
import '../../css/j/jpc-28bbk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bn39dyf6b"/><path class="jpc-28bbk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:file-zip-filled"} {...others} />);
}

export default Component;
