import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/ljyhemvfh.css';
import '../../css/o/oigxjx0ho.css';
import '../../css/m/m8j-0ru9v.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ljyhemvfh"/><path class="oigxjx0ho"/><path class="m8j-0ru9v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:factory"} {...others} />);
}

export default Component;
