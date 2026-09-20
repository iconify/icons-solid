import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dgd-5o5ub.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="dgd-5o5ub"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:jeep-fill"} {...others} />);
}

export default Component;
