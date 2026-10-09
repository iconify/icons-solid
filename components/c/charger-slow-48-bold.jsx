import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uf44fsf2t.css';
import '../../css/f/fy0c3cbja.css';
import '../../css/o/op21zq27n.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="uf44fsf2t"/><path class="fy0c3cbja"/><path class="op21zq27n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:charger-slow-48-bold"} {...others} />);
}

export default Component;
