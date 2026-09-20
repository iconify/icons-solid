import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m069-ebdb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="m069-ebdb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:dots-vertical-circle"} {...others} />);
}

export default Component;
