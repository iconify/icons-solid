import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/awvoz5hrs.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="awvoz5hrs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:mailbox-fill"} {...others} />);
}

export default Component;
