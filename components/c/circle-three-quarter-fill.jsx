import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/te8r7xbxe.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="te8r7xbxe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:circle-three-quarter-fill"} {...others} />);
}

export default Component;
