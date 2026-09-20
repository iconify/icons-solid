import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kx9w79bgo.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="kx9w79bgo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:octagon-fill"} {...others} />);
}

export default Component;
