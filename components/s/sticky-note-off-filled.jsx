import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rhugqhbem.css';
import '../../css/c/ct2edwbld.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rhugqhbem"/><path class="ct2edwbld"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:sticky-note-off-filled"} {...others} />);
}

export default Component;
