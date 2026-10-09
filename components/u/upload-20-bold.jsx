import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/krxvcobsl.css';
import '../../css/c/c6dnn6b8v.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="krxvcobsl"/><path class="c6dnn6b8v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:upload-20-bold"} {...others} />);
}

export default Component;
