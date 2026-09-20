import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wf8yx3bhw.css';

const viewBox = {"width":30,"height":30};
const content = `<path class="wf8yx3bhw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"wi:yahoo-19"} {...others} />);
}

export default Component;
