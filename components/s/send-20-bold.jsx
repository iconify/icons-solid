import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z63nbsbdb.css';
import '../../css/h/hjq60mx9m.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="z63nbsbdb"/><path class="hjq60mx9m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:send-20-bold"} {...others} />);
}

export default Component;
