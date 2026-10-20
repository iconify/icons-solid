import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b381prbzq.css';
import '../../css/s/slbg-zbbp.css';
import '../../css/o/oputujbyf.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="b381prbzq"/><path class="slbg-zbbp"/><path class="oputujbyf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:letter-spacing-48"} {...others} />);
}

export default Component;
