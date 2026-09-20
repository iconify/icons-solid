import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pbigfv4ml.css';
import '../../css/z/zdyt6ubsa.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="pbigfv4ml"/><path class="zdyt6ubsa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:file-start"} {...others} />);
}

export default Component;
