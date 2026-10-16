import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qnwg1wboc.css';
import '../../css/f/fu_1idbur.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="qnwg1wboc"/><path class="fu_1idbur"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:tower-section-48"} {...others} />);
}

export default Component;
