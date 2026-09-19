import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wcrm94b7u.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wcrm94b7u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fe:pinterest"} {...others} />);
}

export default Component;
