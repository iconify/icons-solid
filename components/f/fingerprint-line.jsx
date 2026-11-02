import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xx0mq7gqy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xx0mq7gqy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:fingerprint-line"} {...others} />);
}

export default Component;
