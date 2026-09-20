import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jog7wibwp.css';
import '../../css/w/wx_6pkbna.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="jog7wibwp"/><path class="wx_6pkbna"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:white-square"} {...others} />);
}

export default Component;
