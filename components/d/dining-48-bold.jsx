import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wmbj85spj.css';
import '../../css/o/orpaa3b5x.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="wmbj85spj"/><path class="orpaa3b5x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:dining-48-bold"} {...others} />);
}

export default Component;
