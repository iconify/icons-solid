import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wao21ccuq.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="wao21ccuq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:questionsign"} {...others} />);
}

export default Component;
