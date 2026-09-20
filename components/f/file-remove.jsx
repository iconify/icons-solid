import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m-_0e_e0e.css';
import '../../css/y/yf1-nhwqt.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="m-_0e_e0e"/><path class="yf1-nhwqt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:file-remove"} {...others} />);
}

export default Component;
