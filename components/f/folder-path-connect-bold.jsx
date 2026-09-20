import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qk0s4mbbv.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="qk0s4mbbv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:folder-path-connect-bold"} {...others} />);
}

export default Component;
