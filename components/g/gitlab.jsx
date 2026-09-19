import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g44o0xbce.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="g44o0xbce"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:gitlab"} {...others} />);
}

export default Component;
