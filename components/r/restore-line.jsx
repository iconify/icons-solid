import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vmq9d11ge.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vmq9d11ge"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:restore-line"} {...others} />);
}

export default Component;
