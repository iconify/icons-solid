import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/ka5zrvgwj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ka5zrvgwj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:folder-x"} {...others} />);
}

export default Component;
