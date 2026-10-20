import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zy-u42bhp.css';
import '../../css/l/l4pnfibsn.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="zy-u42bhp"/><path class="l4pnfibsn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:message-question-48-bold"} {...others} />);
}

export default Component;
