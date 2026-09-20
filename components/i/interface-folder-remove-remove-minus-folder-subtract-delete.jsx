import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pjoof61_d.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="pjoof61_d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-folder-remove-remove-minus-folder-subtract-delete"} {...others} />);
}

export default Component;
