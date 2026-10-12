import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tr-zs8cga.css';
import '../../css/o/ooobm-34o.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="tr-zs8cga"/><path class="ooobm-34o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:turtle-20-bold"} {...others} />);
}

export default Component;
