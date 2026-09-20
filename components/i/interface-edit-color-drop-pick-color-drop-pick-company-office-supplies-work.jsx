import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lgdwnk94e.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="lgdwnk94e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-edit-color-drop-pick-color-drop-pick-company-office-supplies-work"} {...others} />);
}

export default Component;
