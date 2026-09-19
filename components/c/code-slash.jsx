import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vpuha0xak.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vpuha0xak"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gg:code-slash"} {...others} />);
}

export default Component;
