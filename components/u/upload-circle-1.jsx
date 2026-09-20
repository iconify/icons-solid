import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s12b9m4yl.css';
import '../../css/c/c-rl6lbfw.css';

const viewBox = {"width":25,"height":24};
const content = `<path class="s12b9m4yl"/><path clip-rule="evenodd" class="c-rl6lbfw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:upload-circle-1"} {...others} />);
}

export default Component;
