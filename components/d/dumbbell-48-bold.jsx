import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vl8r3viay.css';
import '../../css/q/qdpkq-bcf.css';
import '../../css/l/l89fhnblb.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="vl8r3viay"/><path class="qdpkq-bcf"/><path class="l89fhnblb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:dumbbell-48-bold"} {...others} />);
}

export default Component;
