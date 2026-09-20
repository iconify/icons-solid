import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gn86ay6-p.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gn86ay6-p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:folder-delete-line"} {...others} />);
}

export default Component;
