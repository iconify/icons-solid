import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/apq2pw-va.css';
import '../../css/f/fjn5fnnqh.css';
import '../../css/x/xs7xk1ywk.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="apq2pw-va"/><path class="fjn5fnnqh"/><path class="xs7xk1ywk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:fan-20"} {...others} />);
}

export default Component;
