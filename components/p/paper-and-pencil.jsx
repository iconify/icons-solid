import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h3t_iyber.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="h3t_iyber"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:paper-and-pencil"} {...others} />);
}

export default Component;
