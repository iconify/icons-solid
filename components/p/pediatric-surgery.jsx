import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp9481b1v.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="gp9481b1v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:pediatric-surgery"} {...others} />);
}

export default Component;
