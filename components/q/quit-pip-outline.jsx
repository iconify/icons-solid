import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/ns7rrrbso.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ns7rrrbso"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:quit-pip-outline"} {...others} />);
}

export default Component;
