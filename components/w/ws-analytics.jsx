import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kd0mncbbv.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="kd0mncbbv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"oui:ws-analytics"} {...others} />);
}

export default Component;
