import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dtdcokbjf.css';
import '../../css/v/v66t4r92w.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="dtdcokbjf"/><path class="v66t4r92w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:accessibility"} {...others} />);
}

export default Component;
