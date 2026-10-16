import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cjsrzsb4b.css';
import '../../css/v/vt4p30p5y.css';
import '../../css/n/n3xkk3bbf.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="cjsrzsb4b"/><path class="vt4p30p5y"/><path class="n3xkk3bbf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:liquid-hydrogen-48"} {...others} />);
}

export default Component;
