import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uhcab65mh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="uhcab65mh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:kanban-view-2"} {...others} />);
}

export default Component;
