import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hgk3cb3nm.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="hgk3cb3nm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:layout-right-sidebar"} {...others} />);
}

export default Component;
