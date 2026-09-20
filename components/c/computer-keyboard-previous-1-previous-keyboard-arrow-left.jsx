import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wcg4c_nrx.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="wcg4c_nrx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:computer-keyboard-previous-1-previous-keyboard-arrow-left"} {...others} />);
}

export default Component;
