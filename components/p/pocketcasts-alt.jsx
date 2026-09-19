import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yldqz4f1g.css';
import '../../css/t/t-ubm2b9z.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yldqz4f1g"/><path class="t-ubm2b9z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:pocketcasts-alt"} {...others} />);
}

export default Component;
