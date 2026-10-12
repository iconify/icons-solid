import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c_yowkbgo.css';
import '../../css/l/lgdstuzsh.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="c_yowkbgo"/><path class="lgdstuzsh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:binder-48-bold"} {...others} />);
}

export default Component;
