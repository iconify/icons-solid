import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bzlosk28h.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bzlosk28h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:dragonfly-fill"} {...others} />);
}

export default Component;
