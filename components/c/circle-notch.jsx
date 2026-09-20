import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bjxqo3bqn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bjxqo3bqn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:circle-notch"} {...others} />);
}

export default Component;
