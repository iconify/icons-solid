import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/trh073bxd.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="trh073bxd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-edit-select-area-rectangle-dash-select-area-object-work"} {...others} />);
}

export default Component;
