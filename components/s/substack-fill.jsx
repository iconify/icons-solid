import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lk1u7ubxg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lk1u7ubxg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:substack-fill"} {...others} />);
}

export default Component;
