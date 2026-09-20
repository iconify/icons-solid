import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b15xjgb5x.css';
import '../../css/c/c50_lwbrj.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="b15xjgb5x"/><path class="c50_lwbrj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"oui:anomaly-detection"} {...others} />);
}

export default Component;
