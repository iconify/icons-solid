import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jno6ojglm.css';
import '../../css/y/yrc3asegu.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="jno6ojglm"/><path class="yrc3asegu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:spillway-48-bold"} {...others} />);
}

export default Component;
