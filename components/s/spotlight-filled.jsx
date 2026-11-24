import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cfsld5xui.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cfsld5xui"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:spotlight-filled"} {...others} />);
}

export default Component;
