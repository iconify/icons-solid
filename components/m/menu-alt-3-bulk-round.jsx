import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ahowc3_6y.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ahowc3_6y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:menu-alt-3-bulk-round"} {...others} />);
}

export default Component;
