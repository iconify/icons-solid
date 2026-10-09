import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i8sj0bbsc.css';
import '../../css/c/c75q7gbnf.css';
import '../../css/e/ezx2ctbsk.css';
import '../../css/z/z6thc6b1y.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="i8sj0bbsc"/><path class="c75q7gbnf"/><path class="ezx2ctbsk"/><path class="z6thc6b1y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:mic-48"} {...others} />);
}

export default Component;
