import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lqt6r9oga.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="lqt6r9oga"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:word-wrap-around-bounding-box"} {...others} />);
}

export default Component;
