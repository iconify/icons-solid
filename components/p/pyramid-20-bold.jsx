import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ig39blqsl.css';
import '../../css/t/tx633bbfk.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ig39blqsl"/><path class="tx633bbfk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:pyramid-20-bold"} {...others} />);
}

export default Component;
