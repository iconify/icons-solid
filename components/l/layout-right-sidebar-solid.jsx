import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vuv7_qo5p.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="vuv7_qo5p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:layout-right-sidebar-solid"} {...others} />);
}

export default Component;
