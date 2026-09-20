import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mxxrf2bwp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mxxrf2bwp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:message-square-plus"} {...others} />);
}

export default Component;
