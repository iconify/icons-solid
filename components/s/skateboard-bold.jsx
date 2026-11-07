import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vskr90bqk.css';
import '../../css/k/kdjsh1b9r.css';
import '../../css/j/jlmj2df4o.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="vskr90bqk"/><path class="kdjsh1b9r"/><path class="jlmj2df4o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:skateboard-bold"} {...others} />);
}

export default Component;
