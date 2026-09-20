import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/ki6msqb6q.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ki6msqb6q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:wall-sconce-flat-variant"} {...others} />);
}

export default Component;
