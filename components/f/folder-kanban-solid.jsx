import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dpd0b1bgq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dpd0b1bgq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:folder-kanban-solid"} {...others} />);
}

export default Component;
