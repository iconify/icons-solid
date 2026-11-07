import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rd9a8-uca.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="rd9a8-uca"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:table-cells-merge-outline"} {...others} />);
}

export default Component;
