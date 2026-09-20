import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s3i_9n3oe.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="s3i_9n3oe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:weibo-fill"} {...others} />);
}

export default Component;
