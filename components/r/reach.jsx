import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qeztyrbbn.css';
import '../../css/u/uen6t6bqt.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="qeztyrbbn"/><path class="uen6t6bqt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:reach"} {...others} />);
}

export default Component;
