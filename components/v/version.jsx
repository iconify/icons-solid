import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pl04g7bka.css';
import '../../css/u/uffvvac3n.css';
import '../../css/z/ze1765b5g.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="pl04g7bka"/><path class="uffvvac3n"/><path class="ze1765b5g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:version"} {...others} />);
}

export default Component;
