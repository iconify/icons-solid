import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/akdj-thul.css';
import '../../css/v/va0b3zbzu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="akdj-thul"/><path class="va0b3zbzu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:cloud-fog-filled"} {...others} />);
}

export default Component;
