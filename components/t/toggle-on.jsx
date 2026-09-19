import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qqalj6buc.css';

const viewBox = {"width":2048,"height":1280};
const content = `<path class="qqalj6buc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:toggle-on"} {...others} />);
}

export default Component;
