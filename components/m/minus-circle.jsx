import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dlg6dlbdj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dlg6dlbdj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:minus-circle"} {...others} />);
}

export default Component;
