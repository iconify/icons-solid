import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vdr68o9hm.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="vdr68o9hm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:align-horizontal-center-fill"} {...others} />);
}

export default Component;
